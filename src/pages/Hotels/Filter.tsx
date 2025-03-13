import { BottomSheetView } from '@gorhom/bottom-sheet';
import { FC } from 'react';
import { Text } from 'react-native-paper';
import { bottomSheetStyles } from './Hotels.styles';

export const Filter: FC = () => (
  <BottomSheetView style={bottomSheetStyles.root}>
    <Text>Filter</Text>
  </BottomSheetView>
);
