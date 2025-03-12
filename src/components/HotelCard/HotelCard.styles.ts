import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const hotelsCardStyles = StyleSheet.create({
  imageWrapper: {
    padding: 10,
  },
  cardImage: {
    height: 150,
    resizeMode: 'stretch',
  },
  ratingsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: COLORS.Gray,
  },
  costWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
