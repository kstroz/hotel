import { pageWrapperStyles } from '@components/PageWrapper/PageWrapper.styles';
import { StyleSheet } from 'react-native';

export const hotelsStyles = StyleSheet.create({
  buttons: {
    ...pageWrapperStyles.root,
  },
  listContent: {
    ...pageWrapperStyles.root,
    gap: 20,
  },
});

export const bottomSheetStyles = StyleSheet.create({
  root: {
    ...pageWrapperStyles.root,
    flex: 1,
  },
});
