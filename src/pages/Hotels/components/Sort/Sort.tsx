import { FC, useCallback } from 'react';
import { List, Button } from 'react-native-paper';
import { COLORS } from '@theme/Colors';
import { SortProps } from './Sort.types';
import { SORT_OPTIONS } from './Sort.consts';
import { View } from 'react-native';
import { sortStyles } from './Sort.styles';

export const Sort: FC<SortProps> = ({ sortConfig, onSortChange }) => {
  const renderIcon = useCallback(
    (order: string, sortBy: string) => (
      <List.Icon
        icon="check"
        color={
          sortConfig?.order === order && sortConfig?.sortBy === sortBy
            ? COLORS.Primary
            : COLORS.Transparent
        }
      />
    ),
    [sortConfig?.order, sortConfig?.sortBy],
  );

  return (
    <View style={sortStyles.root}>
      <View>
        {SORT_OPTIONS.map(({ label, config: { order, sortBy } }) => (
          <List.Item
            key={`${sortBy}-${order}`}
            title={label}
            onPress={() => onSortChange({ order, sortBy })}
            right={() => renderIcon(order, sortBy)}
          />
        ))}
      </View>
      <Button
        onPress={() => onSortChange(undefined)}
        disabled={!sortConfig}
        mode="text">
        Reset
      </Button>
    </View>
  );
};
