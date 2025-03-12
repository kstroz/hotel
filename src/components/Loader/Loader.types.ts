import { ActivityIndicatorProps } from 'react-native-paper';

export interface LoaderProps extends ActivityIndicatorProps {
  type?: 'standard' | 'fullscreen';
}
