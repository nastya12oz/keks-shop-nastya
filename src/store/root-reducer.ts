import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { productsData } from './products-data/products-data.slice';
import { reviewsData } from './reviews-data/reviews-data.slice';
// import { filtersProcess } from './filters-process/filters-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Products]: productsData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  // [NameSpace.Filters]: filtersProcess.reducer
});
