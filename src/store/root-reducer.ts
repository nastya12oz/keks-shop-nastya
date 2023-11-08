import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { productsData } from './products-data/products-data.slice';
import { reviewsData } from './reviews-data/reviews-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.Products]: productsData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
});
