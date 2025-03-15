import { UserRatingFilter } from './components/Filter/Filter.types';

export const PRICE_FILTER_INIT = [1, 500];

export const USER_RATING_FILTER_INIT: Array<UserRatingFilter> = [
  { label: 'Excellent', min: 8.7, max: 10, checked: false },
  { label: 'Very Good', min: 8.1, max: 8.6, checked: false },
  { label: 'Good', min: 7.5, max: 8.0, checked: false },
  { label: 'Okay', min: 6.0, max: 7.4, checked: false },
];

export const STAR_FILTER_INIT = Array(5).fill(false) as Array<boolean>;
