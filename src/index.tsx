import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchProductsListAction, fetchLastReviewAction, fetchFavoritesAction } from './store/api-actions';

store.dispatch(fetchProductsListAction());
store.dispatch(fetchLastReviewAction());
store.dispatch(fetchFavoritesAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
