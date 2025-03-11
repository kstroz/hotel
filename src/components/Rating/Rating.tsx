import React, { FC } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import { ratingStyles } from './Rating.styles';
import { COLORS } from '@theme/Colors';
import { RatingProps } from './Rating.types';

const Rating: FC<RatingProps> = ({
  rate,
  totalStars = 5,
  size = 18,
  color = COLORS.Gold,
}) => {
  const stars = Array.from({ length: totalStars }, (_, index) => index < rate);

  return (
    <View style={ratingStyles.root}>
      {stars.map((isFilled, index) => (
        <Icon
          source={isFilled ? 'star' : 'star-outline'}
          key={index}
          size={size}
          color={color}
        />
      ))}
    </View>
  );
};

export default Rating;
