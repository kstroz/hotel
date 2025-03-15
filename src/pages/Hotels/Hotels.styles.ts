import { pageWrapperStyles } from '@components/PageWrapper/PageWrapper.styles';
import { COLORS } from '@theme/Colors';
import { StyleSheet } from 'react-native';

export const hotelsStyles = StyleSheet.create({
  buttons: {
    ...pageWrapperStyles.root,
  },
  listContent: {
    ...pageWrapperStyles.root,
    gap: 20,
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  emptyLabel: {
    color: COLORS.Gray,
    textAlign: 'center',
  },
});

export const bottomSheetStyles = StyleSheet.create({
  root: {
    ...pageWrapperStyles.root,
    flex: 1,
  },
});
