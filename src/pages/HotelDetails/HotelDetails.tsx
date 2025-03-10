import { useHomeRoute } from '@navigation/hooks';
import { View, Text } from 'react-native';

export const HotelDetails = () => {
  const route = useHomeRoute();
  const { id } = route.params ?? {};

  return (
    <View>
      <Text>Detail of hotel with id: {id}</Text>
    </View>
  );
};
