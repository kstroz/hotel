import { FC, useState } from 'react';
import { View } from 'react-native';
import { Checkbox, Text, Button } from 'react-native-paper';
import { COLORS } from '@theme/Colors';
import { FilterProps } from './Filter.types';
import { Rating } from '@components/Rating';
import { filterStyles } from './Filter.styles';
import { STAR_FILTER_INIT } from '@pages/Hotels/Hotels.consts';

export const Filter: FC<FilterProps> = ({ filters, onFiltersChange }) => {
  const [stars, setStars] = useState(filters.stars);

  const changeStars = (index: number) => {
    const newStars = [...stars];
    newStars[index] = !newStars[index];
    setStars(newStars);
  };

  return (
    <View style={filterStyles.root}>
      {/* User Rating (1 - 10) */}

      {/* Stars (1 - 5) */}
      <View style={filterStyles.filterTypeWrapper}>
        <Text variant="titleLarge">Stars</Text>
        <View>
          {[...stars].reverse().map((_, i) => (
            <View key={`stars-${i}`} style={filterStyles.starsWrapper}>
              <Rating rate={stars.length - i} />
              <Checkbox.Android
                status={stars?.[stars.length - i - 1] ? 'checked' : 'unchecked'}
                onPress={() => changeStars(stars.length - i - 1)}
                color={COLORS.Primary}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={filterStyles.buttons}>
        <Button
          mode="text"
          onPress={() => onFiltersChange({ stars: STAR_FILTER_INIT })}>
          Reset
        </Button>
        <Button mode="text" onPress={() => onFiltersChange({ stars })}>
          Filter
        </Button>
      </View>
    </View>
  );
};

export default Filter;
