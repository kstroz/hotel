import {
  HomeStackNavigatorParamList,
  HomeStackScreenTitles,
} from '@navigation/HomeStack';
import { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export const useHomeRoute = <
  RouteName extends HomeStackScreenTitles,
>(): RouteProp<HomeStackNavigatorParamList, RouteName> =>
  useRoute<RouteProp<HomeStackNavigatorParamList, RouteName>>();
