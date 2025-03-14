import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const filterStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  filterTypeWrapper: {
    flex: 1,
  },
  pricingLabelsWrapper: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  label: {
    backgroundColor: COLORS.LightPink,
    justifyContent: 'center',
    borderRadius: 10,
    width: '40%',
    padding: 12,
    gap: 2,
  },
  sliderWrapper: {
    marginTop: 8,
    marginHorizontal: 12,
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
