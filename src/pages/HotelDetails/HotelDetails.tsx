import { HotelCard } from '@components/HotelCard';
import { PageWrapper } from '@components/PageWrapper';
import { useHomeNavigation, useHomeRoute } from '@navigation/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export const HotelDetails = () => {
  const nav = useHomeNavigation();
  const route = useHomeRoute();
  const { hotel } = route.params ?? {};
  const { name } = hotel!;

  useFocusEffect(
    useCallback(() => {
      nav.setOptions({
        headerTitle: name,
      });
    }, [name, nav]),
  );

  return (
    <PageWrapper>
      <HotelCard hotel={hotel!} />
    </PageWrapper>
  );
};
