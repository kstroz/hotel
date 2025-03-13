import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';
import { COLORS } from './Colors';

export const CustomTheme: MD3Theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    elevation: {
      ...DefaultTheme.colors.elevation,
      level0: COLORS.White,
      level1: COLORS.White,
      level2: COLORS.White,
      level3: COLORS.White,
      level4: COLORS.White,
      level5: COLORS.White,
    },
    primary: COLORS.Primary,

    // Segmented buttons
    // checked state
    secondaryContainer: '#f7bedc',
    onSecondaryContainer: COLORS.DarkGray, // text

    // unchecked
    onSurface: COLORS.DarkGray, // text
  },
};
