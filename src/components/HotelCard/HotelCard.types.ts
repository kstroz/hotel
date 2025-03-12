import { Hotel } from '@api/types/hotel';

export interface HotelCardProps {
  hotel: Hotel;
  onPress?: () => void;
  testID?: string;
}
