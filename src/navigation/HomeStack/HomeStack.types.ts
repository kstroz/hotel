import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Hotels: undefined;
  HotelDetails: {
    id: number;
  };
};

export type HomeStackNavigation =
  NativeStackNavigationProp<HomeStackNavigatorParamList>;

export enum HomeStackScreenTitles {
  Hotels = 'Hotels',
  HotelDetails = 'HotelDetails',
}
