import { store } from '../store/index';
import { TProductCardSmallList, TProduct } from './product';
import { TReviews, TReview } from './review';
import { TFilterSortRating, TFilterSortDate } from '../../types/filters';

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

export type FiltersData = {
  // firstLevel: FirstLevelFilter | null;
  // secondLevel: SecondLevelFilter[];
  sortingByRating: TFilterSortRating;
  sortingByDate: TFilterSortDate;
};
