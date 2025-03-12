import { FC, useCallback } from 'react';
import { FlatList } from 'react-native';
import { hotelsStyles } from './Hotels.styles';
import { HomeStackScreenTitles } from '@navigation/HomeStack';
import { useHomeNavigation } from '@navigation/hooks';
import { useHotels } from '@api/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { Loader } from '@components/Loader';
import HotelCard from '@components/HotelCard/HotelCard';

export const Hotels: FC = () => {
  const nav = useHomeNavigation();
  const { hotels, areHotelsLoading } = useHotels();

  useFocusEffect(
    useCallback(() => {
      nav.setOptions({ headerShown: !areHotelsLoading });
    }, [areHotelsLoading, nav]),
  );

  if (areHotelsLoading) {
    return <Loader type="fullscreen" />;
  }

  return (
    <FlatList
      data={hotels}
      keyExtractor={hotel => hotel.id.toString()}
      contentContainerStyle={hotelsStyles.listContent}
      renderItem={({ item }) => (
        <HotelCard
          hotel={item}
          onPress={() =>
            nav.navigate(HomeStackScreenTitles.HotelDetails, { hotel: item })
          }
          testID={`hotel-${item.id}`}
        />
      )}
    />
  );
};
