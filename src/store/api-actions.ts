import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProductCardSmallList } from '../types/product';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state.js';

export const fetchProductsListAction = createAsyncThunk<TProductCardSmallList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchProductsList',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<TProductCardSmallList>(APIRoute.Products);
    return data;
  },
);
