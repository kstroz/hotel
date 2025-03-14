export interface FilterProps {
  filters: FiltersConfig;
  onFiltersChange: (config: FiltersConfig) => void;
}

export interface FiltersConfig {
  stars: Array<boolean>;
}
