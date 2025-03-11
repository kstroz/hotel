import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const hotelsStyles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: COLORS.Primary,
  },
  loaderElements: {
    color: COLORS.White,
  },
  list: {
    width: '100%',
  },
  listContent: {
    marginHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
    alignItems: 'stretch',
  },
  imageWrapper: {
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
  },
  costWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
