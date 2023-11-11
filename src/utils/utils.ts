import dayjs from 'dayjs';
import { DateFormat, PASSWORD_MIN_LENGTH, REGISTRATION_NAME_MIN_LENGTH, AVATAR_TYPES } from '../const';
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

export function isRegistrationNameValid(name: string) {
  return name.length >= REGISTRATION_NAME_MIN_LENGTH;
}

export function isRegistrationPasswordValid(password: string) {
  if (
    !password ||
      password.length < PASSWORD_MIN_LENGTH ||
      !/\d/.test(password) ||
      !/\D/i.test(password) ||
      false
  ) {
    return false;
  }

  return true;
}

export function isEmailValid(email: string) {
  if (
    !email ||
      !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email) ||
      false
  ) {
    return false;
  }

  return true;
}

export function isAvatarValid(avatar: File) {
  if (!avatar) {
    return true;
  } else {
    const fileName = avatar.name.toLowerCase();
    const rightType = AVATAR_TYPES.some((pic) => fileName.endsWith(pic));

    return rightType && avatar.size <= 1024 * 1024;
  }
}

const createCountFormatter = (one: string, few: string, many: string) => (number: number): string => {
  if (number % 100 >= 11 && number % 100 <= 14) {
    return many; // For numbers like 11-14, 111-114, 211-214...
  } else {
    switch (number % 10) {
      case 1:
        return one; // For numbers ending in 1 but not 11 like 21, 31, 41...
      case 2:
      case 3:
      case 4:
        return few; // For numbers ending in 2-4 but not 12-14 like 22-24, 32-34...
      default:
        return many; // For numbers like 0, 5-10, 15-20, 25-30...
    }
  }
};

export const formatKeksCount = createCountFormatter('кекс', 'кекса', 'кексов');
