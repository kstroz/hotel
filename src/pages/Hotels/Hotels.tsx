import { FC } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { hotelsStyles } from './Hotels.styles';

import { HomeStackScreenTitles } from '@navigation/HomeStack';
import { useHomeNavigation } from '@navigation/hooks';

const dummyData = [
  { id: 1, name: 'Hotel 1' },
  { id: 2, name: 'Hotel 2' },
  { id: 3, name: 'Hotel 3' },
];

export const Hotels: FC = () => {
  const navigation = useHomeNavigation();

  return (
    <View style={hotelsStyles.root}>
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            testID={`hotel-${item.id}`}
            onPress={() =>
              navigation.navigate(HomeStackScreenTitles.HotelDetails, {
                id: item.id,
              })
            }>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
