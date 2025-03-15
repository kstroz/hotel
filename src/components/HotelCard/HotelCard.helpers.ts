import { Rating } from '@components/UserRating/UserRating.types';

export const getRatingFromScore = (score: number): Rating => {
  if (score >= Rating.Excellent) {
    return Rating.Excellent;
  }
  if (score >= Rating['Very good']) {
    return Rating['Very good'];
  }
  if (score >= Rating.Good) {
    return Rating.Good;
  }
  return Rating.Okay;
};
