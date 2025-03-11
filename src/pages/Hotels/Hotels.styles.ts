import { StyleSheet } from 'react-native';

export const hotelsStyles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
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
