import { FC } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { hotelsStyles } from './Hotels.styles';

import { HomeStackScreenTitles } from '@navigation/HomeStack';
import { useHomeNavigation } from '@navigation/hooks';
import { useHotels } from '@api/hooks';

export const Hotels: FC = () => {
  const nav = useHomeNavigation();
  const { hotels, areHotelsLoading } = useHotels();

  if (areHotelsLoading) {
    return (
      <View style={hotelsStyles.root}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={hotelsStyles.root}>
      <FlatList
        data={hotels}
        keyExtractor={hotel => hotel.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            testID={`hotel-${item.id}`}
            onPress={() =>
              nav.navigate(HomeStackScreenTitles.HotelDetails, {
                hotel: item,
              })
            }>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
