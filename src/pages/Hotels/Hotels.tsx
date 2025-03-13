import { FC, memo, useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { hotelsStyles } from './Hotels.styles';
import { HomeStackScreenTitles } from '@navigation/HomeStack';
import { useHomeNavigation } from '@navigation/hooks';
import { useHotels } from '@api/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { Loader } from '@components/Loader';
import HotelCard from '@components/HotelCard/HotelCard';
import { Card, Icon, SegmentedButtons } from 'react-native-paper';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Filter } from './Filter';
import Sort from './components/Sort';
import { SortConfig, TBottomSheet } from './Hotels.types';
import { COLORS } from '@theme/Colors';

export const Hotels: FC = memo(() => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const nav = useHomeNavigation();
  const [button, setButton] = useState<TBottomSheet>('');
  const { hotels, areHotelsLoading } = useHotels();
  const [sortConfig, setSortConfig] = useState<SortConfig>();

  useFocusEffect(
    useCallback(() => {
      nav.setOptions({
        headerShown: !areHotelsLoading,
      });
    }, [areHotelsLoading, nav]),
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
              onValueChange={value => setButton(value as TBottomSheet)}
              density="medium"
              buttons={[
                {
                  icon: props => (
                    <Icon
                      {...props}
                      color={sortConfig ? COLORS.Primary : undefined}
                      source={'sort'}
                    />
                  ),
                  labelStyle: {
                    color: sortConfig ? COLORS.Primary : undefined,
                  },
                  value: 'sort',
                  label: 'Sort',
                  onPress: () => bottomSheetRef.current?.expand(),
                },
                {
                  icon: props => <Icon {...props} source={'filter'} />,
                  value: 'filter',
                  label: 'Filter',
                  onPress: () => bottomSheetRef.current?.expand(),
                },
              ]}
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
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['50%']}
        enablePanDownToClose={true}
        onClose={() => setButton('')}
        backdropComponent={BottomSheetBackdrop}>
        {button === 'filter' ? (
          <Filter />
        ) : button === 'sort' ? (
          <Sort onSortChange={setSortConfig} sortConfig={sortConfig} />
        ) : (
          <></>
        )}
      </BottomSheet>
    </>
  );
});
