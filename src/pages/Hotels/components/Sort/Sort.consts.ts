import { SortOption } from './Sort.types';

export const SORT_OPTIONS: Array<SortOption> = [
  { label: 'Price (lowest first)', config: { sortBy: 'price', order: 'asc' } },
  {
    label: 'Price (highest first)',
    config: { sortBy: 'price', order: 'desc' },
  },
  { label: 'Stars (lowest first)', config: { sortBy: 'stars', order: 'asc' } },
  {
    label: 'Stars (highest first)',
    config: { sortBy: 'stars', order: 'desc' },
  },
  {
    label: 'Rating (lowest first)',
    config: { sortBy: 'userRating', order: 'asc' },
  },
  {
    label: 'Rating (highest first)',
    config: { sortBy: 'userRating', order: 'desc' },
  },
];
