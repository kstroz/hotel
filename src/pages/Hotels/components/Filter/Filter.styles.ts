import { StyleSheet } from 'react-native';

export const filterStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  filterTypeWrapper: {
    flex: 1,
  },
  starsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 12,
  },
});
