import { Dimensions } from 'react-native';
import { pageWrapperStyles } from '@components/PageWrapper/PageWrapper.styles';

export const FALLBACK_IMG =
  'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

export const CAROUSEL_WIDTH =
  Dimensions.get('window').width - pageWrapperStyles.root.marginHorizontal * 2;

export const LONDON_LAT = 51.509865;
export const LONDON_LON = -0.118092;
