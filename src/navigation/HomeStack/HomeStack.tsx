import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeStackNavigatorParamList,
  HomeStackScreenTitles,
} from './HomeStack.types';
import { Hotels } from '@pages/Hotels/Hotels';
import { HotelDetails } from '@pages/HotelDetails/HotelDetails';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export const HomeStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HomeStackScreenTitles.Hotels} component={Hotels} />
      <Stack.Screen
        name={HomeStackScreenTitles.HotelDetails}
        component={HotelDetails}
      />
    </Stack.Navigator>
  );
};
