import { SortConfig } from '@pages/Hotels/Hotels.types';

export type SortProps = {
  sortConfig?: SortConfig;
  onSortChange: (config?: SortConfig) => void;
};

export type SortOption = {
  label: string;
  config: SortConfig;
};
