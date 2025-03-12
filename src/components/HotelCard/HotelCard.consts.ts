import { Dimensions } from 'react-native';
import { hotelsCardStyles } from './HotelCard.styles';
import { pageWrapperStyles } from '@components/PageWrapper/PageWrapper.styles';

export const FALLBACK_IMG =
  'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

export const CAROUSEL_WIDTH =
  Dimensions.get('window').width -
  hotelsCardStyles.imageWrapper.padding * 2 -
  pageWrapperStyles.root.marginHorizontal * 2;
