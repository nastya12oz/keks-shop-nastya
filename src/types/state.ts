import { store } from '../store/index';
import { TProductCardSmallList, TProduct } from './product';
import { TReviews, TReview } from './review';
// import { TFilterSortRating, TFilterSortDate } from '../../types/filters';
import { AuthorizationStatus } from '../const';

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
  // sortingByRating: TFilterSortRating;
  // sortingByDate: TFilterSortDate;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  avatarUrl: string;
  email: string;
  isAlreadyExist: boolean;
  isLoading: boolean;
  hasError: boolean;
  isRegistrationSuccess: boolean;
}
