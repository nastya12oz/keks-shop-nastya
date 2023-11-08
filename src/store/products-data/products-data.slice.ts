import { createSlice } from '@reduxjs/toolkit';
import { ProductsData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchProductsListAction } from '../api-actions';

const initialState: ProductsData = {
  products: [],
  hasProductsError: false,
  isProductsDataLoading: false,
};

export const productsData = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsListAction.pending, (state) => {
        state.hasProductsError = false;
        state.isProductsDataLoading = true;
      })
      .addCase(fetchProductsListAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.hasProductsError = false;
        state.isProductsDataLoading = false;
      })
      .addCase(fetchProductsListAction.rejected, (state) => {
        state.products = [];
        state.hasProductsError = true;
        state.isProductsDataLoading = false;
      });
  }
});
