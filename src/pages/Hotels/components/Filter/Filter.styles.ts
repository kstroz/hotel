import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const filterStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-around',
  },
  filterTypeWrapper: {
    gap: 12,
  },
  filterInputsWrapper: {
    paddingHorizontal: 10,
  },
  pricingLabelsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    backgroundColor: COLORS.LightPink,
    justifyContent: 'center',
    borderRadius: 10,
    width: '40%',
    padding: 12,
    gap: 2,
    marginBottom: 12,
  },
  starsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
