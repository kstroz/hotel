import { FC, useState } from 'react';
import { View } from 'react-native';
import { Checkbox, Text, Button } from 'react-native-paper';
import { COLORS } from '@theme/Colors';
import { FilterProps } from './Filter.types';
import { Rating } from '@components/Rating';
import { filterStyles } from './Filter.styles';
import {
  PRICE_FILTER_INIT,
  STAR_FILTER_INIT,
  USER_RATING_FILTER_INIT,
} from '@pages/Hotels/Hotels.consts';
import { Slider } from '@miblanchard/react-native-slider';
import { UserRating } from '@components/UserRating';
import { getRatingFromScore } from '@components/HotelCard/HotelCard.helpers';

export const Filter: FC<FilterProps> = ({ filters, onFiltersChange }) => {
  const [price, setPrice] = useState(filters.price);
  const [userRating, setUserRating] = useState([...filters.userRating]);
  const [stars, setStars] = useState([...filters.stars]);

  const changeStars = (index: number) => {
    const newStars = [...stars];
    newStars[index] = !newStars[index];
    setStars(newStars);
  };

  const changeUsersRating = (index: number) => {
    const newRating = [...userRating];
    newRating[index].checked = !newRating[index].checked;
    setUserRating(newRating);
  };

  return (
    <View style={filterStyles.root}>
      {/* Price */}
      <View style={filterStyles.filterTypeWrapper}>
        <Text variant={'titleLarge'}>Price per night</Text>
        <View style={filterStyles.filterInputsWrapper}>
          <View style={filterStyles.pricingLabelsWrapper}>
            <View style={filterStyles.label}>
              <Text variant={'titleSmall'}>Min:</Text>
              <Text variant={'titleSmall'}>{price[0]}</Text>
            </View>
            <Text variant={'titleLarge'}>-</Text>
            <View style={filterStyles.label}>
              <Text variant={'titleSmall'}>Max:</Text>
              <Text variant={'titleSmall'}>{price[1]}</Text>
            </View>
          </View>
          <Slider
            value={price}
            onValueChange={setPrice}
            minimumValue={PRICE_FILTER_INIT[0]}
            maximumValue={PRICE_FILTER_INIT[1]}
            step={20}
            maximumTrackTintColor={COLORS.Gray}
            minimumTrackTintColor={COLORS.Primary}
            thumbTintColor={COLORS.Primary}
          />
        </View>
      </View>

      {/* User Rating */}
      <View style={filterStyles.filterTypeWrapper}>
        <Text variant="titleLarge">Users rating</Text>
        <View style={filterStyles.filterInputsWrapper}>
          {userRating.map((rating, i) => (
            <View key={`userRating-${i}`} style={filterStyles.starsWrapper}>
              <UserRating rate={getRatingFromScore(rating.min)} />
              <Checkbox.Android
                status={userRating[i].checked ? 'checked' : 'unchecked'}
                onPress={() => changeUsersRating(i)}
                color={COLORS.Primary}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Stars */}
      <View style={filterStyles.filterTypeWrapper}>
        <Text variant="titleLarge">Stars</Text>
        <View style={filterStyles.filterInputsWrapper}>
          {stars.map((_, i) => {
            const starValue = stars.length - i;
            return (
              <View
                key={`stars-${starValue}`}
                style={filterStyles.starsWrapper}>
                <Rating rate={starValue} />
                <Checkbox.Android
                  status={stars[starValue - 1] ? 'checked' : 'unchecked'}
                  onPress={() => changeStars(starValue - 1)}
                  color={COLORS.Primary}
                />
              </View>
            );
          })}
        </View>
      </View>

      <View style={filterStyles.buttons}>
        <Button
          mode="text"
          onPress={() => {
            onFiltersChange({
              stars: STAR_FILTER_INIT,
              price: PRICE_FILTER_INIT,
              userRating: USER_RATING_FILTER_INIT,
            });
            setPrice(PRICE_FILTER_INIT);
            setStars(STAR_FILTER_INIT);
            setUserRating(USER_RATING_FILTER_INIT);
          }}>
          Reset
        </Button>
        <Button
          mode="text"
          onPress={() =>
            onFiltersChange({
              price,
              stars,
              userRating,
            })
          }>
          Filter
        </Button>
      </View>
    </View>
  );
};

export default Filter;
