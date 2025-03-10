import { useHomeRoute } from '@navigation/hooks';
import { View, Text } from 'react-native';

export const HotelDetails = () => {
  const route = useHomeRoute();
  const { hotel } = route.params ?? {};
  const { name, price, currency } = hotel ?? {};

  return (
    <View>
      <Text>{name}</Text>
      <Text>
        Price: {price} {currency}
      </Text>
    </View>
  );
};
