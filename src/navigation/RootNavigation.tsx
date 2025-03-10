import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
