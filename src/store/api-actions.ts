import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProductCardSmallList, TProduct } from '../types/product';
import { TReviews, TReview } from '../types/review.js';
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

export const fetchProductByIdAction = createAsyncThunk<TProduct, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchProductById',
  async (id, { extra: api }) => {
    const { data } = await api.get<TProduct>(`${APIRoute.Product}/${id}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<TReviews, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id: string, { extra: api }) => {
    const response = await api.get<TReviews>(`${APIRoute.Review}/${id}`);
    return response.data;
  }
);


export const fetchSendReviewAction = createAsyncThunk<void, {id: string; formData: FormData}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSendReview',
  async({id, formData}, {extra: api}) => {

    await api.post<void>(`${APIRoute.Review}/${id}`, formData);

  }
);

export const fetchLastReviewAction = createAsyncThunk<TReview, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchLastReview',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<TReview>(APIRoute.LastReview);
    return data;
  }
);
