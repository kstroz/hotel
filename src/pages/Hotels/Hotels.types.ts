export type TBottomSheet = 'filter' | 'sort' | '';

export type SortConfig = {
  order: 'asc' | 'desc';
  sortBy: 'userRating' | 'stars' | 'price';
};
