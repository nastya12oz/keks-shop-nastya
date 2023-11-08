import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TReviews, TReview } from '../../types/review';

export const getReviews = (state: Pick<State, NameSpace.Reviews>): TReviews => state[NameSpace.Reviews].reviews;
export const getReviewsLoadingStatus = (state: Pick<State, NameSpace.Reviews>): boolean => state[NameSpace.Reviews].isReviewsLoading;
export const getReviewsErrorStatus = (state: Pick<State, NameSpace.Reviews>): boolean => state[NameSpace.Reviews].hasReviewsError;
export const getReviewSendingStatus = (state: Pick<State, NameSpace.Reviews>): boolean => state[NameSpace.Reviews].isReviewSending;
export const getReviewSendingErrorStatus = (state: Pick<State, NameSpace.Reviews>): boolean => state[NameSpace.Reviews].hasReviewSendingError;
export const getLastReview = (state: Pick<State, NameSpace.Reviews>): TReview | null => state[NameSpace.Reviews].lastReview;
export const getLastReviewErrorStatus = (state: Pick<State, NameSpace.Reviews>): boolean => state[NameSpace.Reviews].haslastReviewError;
