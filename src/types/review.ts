export type TReview = {
  id: string;
  isoDate: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  positive: string;
  negative: string;
  rating: number;
 }

export type TReviews = TReview[];

