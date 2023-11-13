import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProductCardSmallList, TProduct, TProducts } from '../types/product';
import { TReviews, TReview, TReviewData } from '../types/review.js';
import { APIRoute, AppRoute } from '../const';
import { AppDispatch, State } from '../types/state.js';
import { TUserData, TUserRegistrationData, TAuthData } from '../types/user';
import { saveToken, dropToken } from '../services/token';
import { saveAvatarUrl, saveUserEmail, dropAvatarUrl, dropUserEmail } from '../services/user.js';
import { redirectToRoute } from './action';


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

export const fetchSendReviewAction = createAsyncThunk<void, {id: string; formData: TReviewData}, {
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

export const checkAuthAction = createAsyncThunk<TUserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserData>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, {
dispatch: AppDispatch;
state: State;
extra: AxiosInstance;
}>(
  'login',
  async (login, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, login);
    saveToken(data.token);
    saveAvatarUrl(String(data.avatarUrl));
    saveUserEmail(data.email);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const fetchAvatarAction = createAsyncThunk<TUserData, TUserRegistrationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'avatar',
    async (formData, {extra: api}) => {
      const {data} = await api.post<TUserData>(APIRoute.Avatar, formData, {headers: {'Content-Type': 'multipart/form-data'}});
      return data;

    },
  );

export const registrationAction = createAsyncThunk<TUserData, TUserRegistrationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'registration',
    async (formData, {dispatch, extra: api}) => {
      const {name, email, password} = formData;
      const {data} = await api.post<TUserData>(APIRoute.Registration, {name, email, password});

      if(formData.avatar.name) {
        saveToken(data.token);
        dispatch(fetchAvatarAction(formData));
      }
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {
    extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropAvatarUrl();
    dropUserEmail();
  },
);

export const fetchFavoritesAction = createAsyncThunk<TProducts, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<TProducts>(APIRoute.Favorites);
    return data;
  }
);

export const fetchAddFavoritesAction = createAsyncThunk<TProduct, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ' fetchAddFavorites',
  async(id, { extra: api }) => {
    const {data} = await api.put<TProduct>(`${APIRoute.Favorites}/${id}`);
    return data;
  }
);

export const fetchDeleteFavoritesAction = createAsyncThunk<TProduct, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ' fetchDeleteFavorites',
  async(id, { extra: api }) => {
    const {data} = await api.delete<TProduct>(`${APIRoute.Favorites}/${id}`);
    return data;
  }
);
