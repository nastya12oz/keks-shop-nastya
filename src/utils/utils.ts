import dayjs from 'dayjs';
import { DateFormat } from '../const';

export function getDateFormat(date: string) {
  const dateTime = dayjs(date).format(DateFormat.FULL_DATE_FORMAT);
  const ratingDate = dayjs(date).format(DateFormat.DATE_FORMAT);

  return {dateTime, ratingDate};
}
