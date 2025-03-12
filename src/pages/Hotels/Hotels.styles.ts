import { pageWrapperStyles } from '@components/PageWrapper/PageWrapper.styles';
import { StyleSheet } from 'react-native';

export const hotelsStyles = StyleSheet.create({
  listContent: {
    ...pageWrapperStyles.root,
    gap: 20,
  },
  imageWrapper: {
    padding: 10,
  },
  cardImage: {
    height: 150,
    resizeMode: 'stretch',
  },
  costWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
