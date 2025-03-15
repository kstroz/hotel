export interface FilterProps {
  filters: FiltersConfig;
  onFiltersChange: (config: FiltersConfig) => void;
}

export interface UserRatingFilter {
  label: string;
  min: number;
  max: number;
  checked: boolean;
}

export interface FiltersConfig {
  stars: Array<boolean>;
  price: Array<number>;
  userRating: Array<UserRatingFilter>;
}
