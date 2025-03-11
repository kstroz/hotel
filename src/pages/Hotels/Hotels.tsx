import { FC, useCallback, useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import { hotelsStyles } from './Hotels.styles';
import { HomeStackScreenTitles } from '@navigation/HomeStack';
import { useHomeNavigation } from '@navigation/hooks';
import { useHotels } from '@api/hooks';
import { Card, Icon, Text } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { Rating } from '@components/Rating';

const fallbackImage =
  'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

export const Hotels: FC = () => {
  const nav = useHomeNavigation();
  const { hotels, areHotelsLoading } = useHotels();
  const [images, setImages] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      if (hotels?.length) {
        setImages(hotels.map(({ gallery }) => gallery[0] ?? fallbackImage));
      }
    }, [hotels]),
  );

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
        style={hotelsStyles.list}
        contentContainerStyle={hotelsStyles.listContent}
        renderItem={({ item, index }) => (
          <Card
            testID={`hotel-${item.id}`}
            onPress={() =>
              nav.navigate(HomeStackScreenTitles.HotelDetails, {
                hotel: item,
              })
            }>
            <View style={hotelsStyles.imageWrapper}>
              <Image
                source={{
                  uri: images?.[index] ?? fallbackImage,
                }}
                style={hotelsStyles.cardImage}
                resizeMode="stretch"
                onError={() => {
                  setImages(prev =>
                    prev.map((img, i) => (i === index ? fallbackImage : img)),
                  );
                }}
              />
            </View>
            <Card.Title
              title={item.name}
              titleVariant="titleMedium"
              subtitle={`${item.location.address}, ${item.location.city}`}
              subtitleVariant="labelMedium"
            />
            <Card.Content>
              <Rating rate={item.stars} />
              <View style={hotelsStyles.costWrapper}>
                <Icon
                  source={item.currency === 'EUR' ? 'currency-eur' : ''}
                  size={20}
                />
                <Text variant="titleLarge">{item.price}</Text>
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};
