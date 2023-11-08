import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TProductCardSmallList, TProduct } from '../../types/product';

export const getProductsList = (state: Pick<State, NameSpace.Products>): TProductCardSmallList => state[NameSpace.Products].products;
export const getProductsListErrorStatus = (state: Pick<State, NameSpace.Products>): boolean => state[NameSpace.Products].hasProductsError;
export const getProductsListLoadingStatus = (state: Pick<State, NameSpace.Products>): boolean => state[NameSpace.Products].isProductsDataLoading;
export const getProduct = (state: State): TProduct | null => state[NameSpace.Products].product;
export const getProductErrorStatus = (state: Pick<State, NameSpace.Products>): boolean => state[NameSpace.Products].hasProductError;
export const getProductLoadingStatus = (state: Pick<State, NameSpace.Products>): boolean => state[NameSpace.Products].isProductDataLoading;
