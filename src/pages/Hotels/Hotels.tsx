import { FC, memo, useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { bottomSheetStyles, hotelsStyles } from './Hotels.styles';
import { HomeStackScreenTitles } from '@navigation/HomeStack';
import { useHomeNavigation } from '@navigation/hooks';
import { useHotels } from '@api/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { Loader } from '@components/Loader';
import HotelCard from '@components/HotelCard/HotelCard';
import { Card, Icon, SegmentedButtons } from 'react-native-paper';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import Sort from './components/Sort';
import { SortConfig } from './Hotels.types';
import { COLORS } from '@theme/Colors';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import Filter from './components/Filter';
import { FiltersConfig } from './components/Filter/Filter.types';
import {
  PRICE_FILTER_INIT,
  STAR_FILTER_INIT,
  USER_RATING_FILTER_INIT,
} from './Hotels.consts';

export const Hotels: FC = memo(() => {
  const sortRef = useRef<BottomSheet>(null);
  const filtersRef = useRef<BottomSheet>(null);
  const nav = useHomeNavigation();

  const [sortConfig, setSortConfig] = useState<SortConfig>();
  const [filters, setFilters] = useState<FiltersConfig>({
    price: PRICE_FILTER_INIT,
    stars: STAR_FILTER_INIT,
    userRating: USER_RATING_FILTER_INIT,
  });

  const isPriceFilter =
    filters.price[0] !== PRICE_FILTER_INIT[0] ||
    filters.price[1] !== PRICE_FILTER_INIT[1];

  const isUserRatingFilter = useMemo(
    () => filters.userRating.some(({ checked }) => checked),
    [filters.userRating],
  );

  const isStarFilter = useMemo(
    () => filters.stars.includes(true),
    [filters.stars],
  );

  const areFilters = isStarFilter || isPriceFilter || isUserRatingFilter;

  const { hotels, areHotelsLoading } = useHotels({
    filterFnc: data => {
      let filteredData = data;

      if (isPriceFilter) {
        filteredData = filteredData.filter(
          val => val.price >= filters.price[0] && val.price <= filters.price[1],
        );
      }

      if (isUserRatingFilter) {
        const activeRatings = filters.userRating.filter(
          rating => rating.checked,
        );

        filteredData = filteredData.filter(val =>
          activeRatings.some(
            rating =>
              val.userRating >= rating.min && val.userRating <= rating.max,
          ),
        );
      }

      if (isStarFilter) {
        filteredData = filteredData.filter(
          val => filters?.stars[val.stars - 1],
        );
      }

      return filteredData;
    },
  });

  useFocusEffect(
    useCallback(() => {
      nav.setOptions({
        headerShown: !areHotelsLoading,
      });
    }, [areHotelsLoading, nav]),
  );

  const buttons = useMemo(
    () => [
      {
        icon: (props => (
          <Icon
            {...props}
            color={sortConfig ? COLORS.Primary : undefined}
            source={'sort'}
          />
        )) as IconSource,
        labelStyle: { color: sortConfig ? COLORS.Primary : undefined },
        value: 'sort',
        label: 'Sort',
        onPress: () => sortRef.current?.expand(),
      },
      {
        icon: (props => (
          <Icon
            {...props}
            color={areFilters ? COLORS.Primary : undefined}
            source={'filter'}
          />
        )) as IconSource,
        labelStyle: { color: areFilters ? COLORS.Primary : undefined },
        value: 'filter',
        label: 'Filter',
        onPress: () => filtersRef.current?.expand(),
      },
    ],
    [sortConfig, areFilters],
  );

  const sortedHotels = useMemo(() => {
    if (!sortConfig) {
      return hotels;
    }

    return [...hotels].sort((a, b) => {
      let result = 0;

      switch (sortConfig.sortBy) {
        case 'price': {
          result = a.price - b.price;
          break;
        }
        case 'stars': {
          result = a.stars - b.stars;
          break;
        }
        case 'userRating': {
          result = a.userRating - b.userRating;
          break;
        }
      }

      return sortConfig.order === 'asc' ? result : -result;
    });
  }, [hotels, sortConfig]);

  if (areHotelsLoading) {
    return <Loader type="fullscreen" />;
  }

  return (
    <>
      <View style={hotelsStyles.buttons}>
        <Card elevation={4}>
          <Card.Content>
            <SegmentedButtons
              // Don't set the value it looks more natural this way
              value={''}
              onValueChange={() => undefined}
              density="medium"
              buttons={buttons}
            />
          </Card.Content>
        </Card>
      </View>
      <FlatList
        data={sortedHotels}
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
      <BottomSheet
        ref={filtersRef}
        index={-1}
        snapPoints={['100%']}
        enablePanDownToClose={true}
        backdropComponent={BottomSheetBackdrop}>
        <BottomSheetView style={bottomSheetStyles.root}>
          <Filter
            onFiltersChange={newFilters => {
              setFilters(newFilters);
              filtersRef.current?.close();
            }}
            filters={filters}
          />
        </BottomSheetView>
      </BottomSheet>
      <BottomSheet
        ref={sortRef}
        index={-1}
        snapPoints={['50%']}
        enablePanDownToClose={true}
        backdropComponent={BottomSheetBackdrop}>
        <BottomSheetView style={bottomSheetStyles.root}>
          <Sort onSortChange={setSortConfig} sortConfig={sortConfig} />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
});
