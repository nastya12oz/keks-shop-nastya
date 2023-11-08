import { store } from '../store/index';
import { TProductCardSmallList, TProduct } from './product';
import { TReviews, TReview } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ProductsData = {
  products: TProductCardSmallList;
  hasProductsError: boolean;
  isProductsDataLoading: boolean;
  product: TProduct | null;
  hasProductError: boolean;
  isProductDataLoading: boolean;
}

export type ReviewsData = {
  reviews: TReviews;
  review: TReview | null;
  isReviewsLoading: boolean;
  hasReviewsError: boolean;
  isReviewSending: boolean;
  hasReviewSendingError: boolean;
  lastReview: TReview | null;
  haslastReviewError: boolean;
}
