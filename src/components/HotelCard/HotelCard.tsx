import { Rating } from '@components/Rating';
import { UserRating } from '@components/UserRating';
import { FC, useState } from 'react';
import { Image, View } from 'react-native';
import { Card, Icon, Text } from 'react-native-paper';
import { HotelCardProps } from './HotelCard.types';
import { hotelsCardStyles } from './HotelCard.styles';

const fallbackImage =
  'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

const HotelCard: FC<HotelCardProps> = ({ hotel, onPress, testID }) => {
  const [images, setImages] = useState<string[]>(hotel.gallery);

  return (
    <Card testID={testID} onPress={onPress}>
      <View style={hotelsCardStyles.imageWrapper}>
        <Image
          source={{
            uri: images[0],
          }}
          style={hotelsCardStyles.cardImage}
          onError={() => {
            setImages([fallbackImage]);
          }}
        />
      </View>
      <Card.Title
        title={hotel.name}
        titleVariant="titleMedium"
        subtitle={`${hotel.location.address}, ${hotel.location.city}`}
        subtitleVariant="labelMedium"
      />
      <Card.Content>
        <View style={hotelsCardStyles.ratingsWrapper}>
          <Rating rate={hotel.stars} />
          <View style={hotelsCardStyles.divider} />
          <UserRating rate={hotel.userRating} />
        </View>
        <View style={hotelsCardStyles.costWrapper}>
          <Icon
            source={hotel.currency === 'EUR' ? 'currency-eur' : ''}
            size={20}
          />
          <Text variant="titleLarge">{hotel.price}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default HotelCard;
