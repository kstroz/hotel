import { Hotel } from '@api/types/hotel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Hotels: undefined;
  HotelDetails: {
    hotel: Hotel;
  };
};

export type HomeStackNavigation =
  NativeStackNavigationProp<HomeStackNavigatorParamList>;

export enum HomeStackScreenTitles {
  Hotels = 'Hotels',
  HotelDetails = 'HotelDetails',
}
