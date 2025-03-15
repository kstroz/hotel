import React, { FC } from 'react';

import { Badge, Text } from 'react-native-paper';
import { Rating, UserRatingProps } from './UserRating.types';
import { View } from 'react-native';
import { userRatingStyles } from './UserRating.styles';
import { getBadgeColor } from './UserRating.helpers';

const UserRating: FC<UserRatingProps> = ({ rate }) => (
  <View style={userRatingStyles.root}>
    <Badge style={{ backgroundColor: getBadgeColor(rate) }}>{rate}</Badge>
    <Text variant="labelSmall">{Rating[rate]}</Text>
  </View>
);

export default UserRating;
