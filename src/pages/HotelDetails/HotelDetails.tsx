import { useHomeNavigation, useHomeRoute } from '@navigation/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { View, Text } from 'react-native';

export const HotelDetails = () => {
  const nav = useHomeNavigation();
  const route = useHomeRoute();
  const { hotel } = route.params ?? {};
  const { name, price, currency } = hotel ?? {};

  useFocusEffect(
    useCallback(() => {
      nav.setOptions({
        headerTitle: name,
      });
    }, [name, nav]),
  );

  return (
    <View>
      <Text>{name}</Text>
      <Text>
        Price: {price} {currency}
      </Text>
    </View>
  );
};
