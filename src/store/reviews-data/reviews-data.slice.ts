import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsData } from '../../types/state';
import { fetchReviewsAction, fetchSendReviewAction, fetchLastReviewAction } from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  review: null,
  isReviewsLoading: false,
  hasReviewsError: false,
  isReviewSending: false,
  hasReviewSendingError: false,
  lastReview: null,
  haslastReviewError: false
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.hasReviewsError = false;
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.hasReviewsError = false;
        state.isReviewsLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasReviewsError = true;
        state.isReviewsLoading = false;
      })
      .addCase(fetchSendReviewAction.pending, (state)=> {
        state.hasReviewSendingError = false;
        state.isReviewSending = true;
      })
      .addCase(fetchSendReviewAction.fulfilled, (state)=> {
        state.hasReviewSendingError = false;
        state.isReviewSending = false;
      })
      .addCase(fetchSendReviewAction.rejected, (state) => {
        state.hasReviewSendingError = true;
        state.isReviewSending = false;
      })
      .addCase(fetchLastReviewAction.fulfilled, (state, action) => {
        state.haslastReviewError = false;
        state.lastReview = action.payload;
      })
      .addCase(fetchLastReviewAction.rejected, (state) => {
        state.haslastReviewError = true;
      });
  }
});
