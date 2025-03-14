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
} from '@pages/Hotels/Hotels.consts';
import { Slider } from '@miblanchard/react-native-slider';

export const Filter: FC<FilterProps> = ({ filters, onFiltersChange }) => {
  const [stars, setStars] = useState(filters.stars.reverse());
  const [price, setPrice] = useState(filters.price);

  const changeStars = (index: number) => {
    const newStars = [...stars];
    newStars[index] = !newStars[index];
    setStars(newStars);
  };

  return (
    <View style={filterStyles.root}>
      {/* User Rating (1 - 10) */}
      <View style={filterStyles.filterTypeWrapper}>
        <Text variant={'titleLarge'}>Price per night</Text>
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
          containerStyle={filterStyles.sliderWrapper}
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
      {/* Stars (1 - 5) */}
      <View style={filterStyles.filterTypeWrapper}>
        <Text variant="titleLarge">Stars</Text>
        <View>
          {stars.map((_, i) => (
            <View key={`stars-${i}`} style={filterStyles.starsWrapper}>
              <Rating rate={stars.length - i} />
              <Checkbox.Android
                status={stars[i] ? 'checked' : 'unchecked'}
                onPress={() => changeStars(i)}
                color={COLORS.Primary}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={filterStyles.buttons}>
        <Button
          mode="text"
          onPress={() => {
            onFiltersChange({
              stars: STAR_FILTER_INIT,
              price: PRICE_FILTER_INIT,
            });
            setPrice(PRICE_FILTER_INIT);
            setStars(STAR_FILTER_INIT);
            console.log(stars);
          }}>
          Reset
        </Button>
        <Button
          mode="text"
          onPress={() => onFiltersChange({ stars: stars.reverse(), price })}>
          Filter
        </Button>
      </View>
    </View>
  );
};

export default Filter;
