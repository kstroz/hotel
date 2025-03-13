import { FC, memo, useCallback, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { hotelsStyles } from './Hotels.styles';
import { HomeStackScreenTitles } from '@navigation/HomeStack';
import { useHomeNavigation } from '@navigation/hooks';
import { useHotels } from '@api/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { Loader } from '@components/Loader';
import HotelCard from '@components/HotelCard/HotelCard';
import { Card, SegmentedButtons } from 'react-native-paper';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Filter } from './Filter';
import { Sort } from './Sort';
import { TBottomSheet } from './Hotels.types';

export const Hotels: FC = memo(() => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const nav = useHomeNavigation();
  const [button, setButton] = useState<TBottomSheet>('');
  const { hotels, areHotelsLoading } = useHotels();

  useFocusEffect(
    useCallback(() => {
      nav.setOptions({
        headerShown: !areHotelsLoading,
      });
    }, [areHotelsLoading, nav]),
  );

  if (areHotelsLoading) {
    return <Loader type="fullscreen" />;
  }

  return (
    <>
      <View style={hotelsStyles.buttons}>
        <Card elevation={4}>
          <Card.Content>
            <SegmentedButtons
              value={button}
              onValueChange={value => setButton(value as TBottomSheet)}
              density="medium"
              buttons={[
                {
                  icon: 'sort',
                  value: 'sort',
                  label: 'Sort',
                  onPress: () => bottomSheetRef.current?.expand(),
                },
                {
                  icon: 'filter',
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
          <Sort />
        ) : (
          <></>
        )}
      </BottomSheet>
    </>
  );
});
