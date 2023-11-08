import { createSlice } from '@reduxjs/toolkit';
import { ProductsData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchProductsListAction, fetchProductByIdAction } from '../api-actions';

const initialState: ProductsData = {
  products: [],
  hasProductsError: false,
  isProductsDataLoading: false,
  product: null,
  hasProductError: false,
  isProductDataLoading: false,
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
      })
      .addCase(fetchProductByIdAction.pending, (state) => {
        state.hasProductError = false;
        state.isProductDataLoading = true;
      })
      .addCase(fetchProductByIdAction.fulfilled, (state, action) => {
        state.product = action.payload;
        state.hasProductError = false;
        state.isProductDataLoading = false;
      })
      .addCase(fetchProductByIdAction.rejected, (state) => {
        state.hasProductError = true;
        state.isProductDataLoading = false;
      });
  }
});
