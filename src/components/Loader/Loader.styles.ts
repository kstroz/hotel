import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const loaderStyles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: COLORS.Primary,
  },
  text: {
    color: COLORS.White,
  },
});
