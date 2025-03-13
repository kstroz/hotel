import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const hotelDetailsStyles = StyleSheet.create({
  root: {
    gap: 20,
    justifyContent: 'space-between',
  },
  checkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labels: {
    alignItems: 'center',
  },
  snackbarWrapper: { paddingHorizontal: 20, paddingBottom: 20 },
  snackbar: { backgroundColor: COLORS.Primary },
});
