import { COLORS } from '@theme/Colors';
import { Rating } from './UserRating.types';

export const getBadgeColor = (rate: Rating) => {
  switch (rate) {
    case Rating.Excellent:
      return COLORS.Primary;
    case Rating['Very good']:
      return COLORS.LightGreen;
    case Rating.Good:
      return COLORS.Gold;
    case Rating.Okay:
      return COLORS.Red;
  }
};
