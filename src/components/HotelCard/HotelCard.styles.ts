import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

const IMAGE_HEIGHT = 150;

export const hotelsCardStyles = StyleSheet.create({
  imageWrapper: {
    padding: 10,
  },
  pagination: {
    gap: 5,
    position: 'absolute',
    top: IMAGE_HEIGHT - 10,
  },
  dot: {
    backgroundColor: COLORS.Gray,
    borderRadius: 50,
  },
  activeDot: {
    backgroundColor: COLORS.Primary,
    borderRadius: 50,
  },
  cardImage: {
    height: IMAGE_HEIGHT,
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
