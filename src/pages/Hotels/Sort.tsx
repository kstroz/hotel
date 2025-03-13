import { BottomSheetView } from '@gorhom/bottom-sheet';
import { FC } from 'react';
import { Text } from 'react-native-paper';
import { bottomSheetStyles } from './Hotels.styles';

export const Sort: FC = () => (
  <BottomSheetView style={bottomSheetStyles.root}>
    <Text>Sort</Text>
  </BottomSheetView>
);
