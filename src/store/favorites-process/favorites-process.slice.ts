import { createSlice } from '@reduxjs/toolkit';
import { FavoritesProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFavoritesAction, fetchAddFavoritesAction, fetchDeleteFavoritesAction } from '../api-actions';

const initialState: FavoritesProcess = {
  favorites: [],
  isFavoritesLoading: false,
  hasFavoritesError: false,
  isFavoritesDeleting: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.hasFavoritesError = false;
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.hasFavoritesError = false;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favorites = [];
        state.hasFavoritesError = true;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchAddFavoritesAction.pending, (state) => {
        state.hasFavoritesError = false;
        state.isFavoritesLoading = true;
      })
      .addCase(fetchAddFavoritesAction.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
        state.hasFavoritesError = false;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchAddFavoritesAction.rejected, (state) => {
        state.hasFavoritesError = true;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchDeleteFavoritesAction.pending, (state) => {
        state.hasFavoritesError = false;
        state.isFavoritesDeleting = true;
      })
      .addCase(fetchDeleteFavoritesAction.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter((deletedProduct) => deletedProduct.id !== action.payload.id);
        state.hasFavoritesError = false;
        state.isFavoritesDeleting = false;
      })
      .addCase(fetchDeleteFavoritesAction.rejected, (state) => {
        state.hasFavoritesError = true;
        state.isFavoritesDeleting = false;
      });
  }
});
