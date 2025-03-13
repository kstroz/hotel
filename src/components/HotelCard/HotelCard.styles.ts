import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

const IMAGE_HEIGHT = 300;

export const hotelsCardStyles = StyleSheet.create({
  imageWrapper: {
    paddingTop: 5,
  },
  cardImage: {
    height: IMAGE_HEIGHT,
    borderRadius: 10,
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
