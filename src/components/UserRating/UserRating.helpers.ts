import { COLORS } from '@theme/Colors';

export const getBadgeColor = (rate: number) => {
  if (rate <= 3) {
    return COLORS.Red;
  }
  if (rate <= 7) {
    return COLORS.Gold;
  }

  return COLORS.Primary;
};
