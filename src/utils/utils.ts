import dayjs from 'dayjs';
import { DateFormat } from '../const';
import { TReview } from '../types/review';
import { TFilterSortRating, TFilterSortDate } from '../types/filters';

export function getDateFormat(date: string) {
  const dateTime = dayjs(date).format(DateFormat.FULL_DATE_FORMAT);
  const ratingDate = dayjs(date).format(DateFormat.DATE_FORMAT);

  return {dateTime, ratingDate};
}

function sortByTop(reviewA: TReview, reviewB: TReview) {
  return dayjs(reviewB.isoDate).diff(reviewA.isoDate);
}

function sortByDown(reviewA: TReview, reviewB: TReview) {
  return dayjs(reviewA.isoDate).diff(reviewB.isoDate);
}

export const sortByRating = {
  [TFilterSortRating.All]: (reviews: TReview[]) => reviews,
  [TFilterSortRating.High]: (reviews: TReview[]) => [...reviews].filter((review) => review.rating > 3),
  [TFilterSortRating.Low]: (reviews: TReview[]) => [...reviews].filter((review) => review.rating < 4),
};

export const sortByDate = {
  [TFilterSortDate.Top]: (reviews: TReview[]) => [...reviews].sort(sortByTop),
  [TFilterSortDate.Down]: (reviews: TReview[]) => [...reviews].sort(sortByDown),
};
