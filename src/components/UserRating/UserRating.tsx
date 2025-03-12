import React, { FC } from 'react';

import { Badge, Text } from 'react-native-paper';
import { UserRatingProps } from './UserRating.types';
import { View } from 'react-native';
import { userRatingStyles } from './UserRating.styles';
import { getBadgeColor } from './UserRating.helpers';

const UserRating: FC<UserRatingProps> = ({ rate }) => (
  <View style={userRatingStyles.root}>
    <Text variant="labelSmall">User rating:</Text>
    <Badge style={{ backgroundColor: getBadgeColor(rate) }}>{rate}</Badge>
  </View>
);

export default UserRating;
