import { store } from '../store/index';
import { TProductCardSmallList } from './product';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ProductsData = {
  products: TProductCardSmallList;
  hasProductsError: boolean;
  isProductsDataLoading: boolean;
}
