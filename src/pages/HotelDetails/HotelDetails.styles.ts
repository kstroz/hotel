import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const hotelDetailsStyles = StyleSheet.create({
  root: {
    gap: 20,
    justifyContent: 'space-between',
  },
  snackbarWrapper: { paddingHorizontal: 20, paddingBottom: 20 },
  snackbar: { backgroundColor: COLORS.Primary },
});
