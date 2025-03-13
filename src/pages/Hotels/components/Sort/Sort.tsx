import { BottomSheetView } from '@gorhom/bottom-sheet';
import { FC } from 'react';
import { List, Button } from 'react-native-paper';
import { bottomSheetStyles } from '../../Hotels.styles';
import { COLORS } from '@theme/Colors';
import { SortProps } from './Sort.types';
import { SORT_OPTIONS } from './Sort.consts';

const renderRightIcon = (isValid: boolean) => (
  <List.Icon
    icon="check"
    color={isValid ? COLORS.Primary : COLORS.Transparent}
  />
);

export const Sort: FC<SortProps> = ({ sortConfig, onSortChange }) => (
  <BottomSheetView style={bottomSheetStyles.root}>
    {SORT_OPTIONS.map(({ label, config: { order, sortBy } }) => (
      <List.Item
        key={`${sortBy}-${order}`}
        title={label}
        onPress={() => {
          onSortChange({ order, sortBy });
        }}
        right={() =>
          renderRightIcon(
            sortConfig?.order === order && sortConfig?.sortBy === sortBy,
          )
        }
      />
    ))}
    <Button
      onPress={() => onSortChange(undefined)}
      disabled={!sortConfig}
      mode="text">
      Reset sorting
    </Button>
  </BottomSheetView>
);
