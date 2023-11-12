import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import ProductScreen from '../../pages/product-screen/product-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import SignUpScreen from '../../pages/sign-up-screen/sign-up-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';


function App(): JSX.Element {


  return(
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen />} />
          <Route path={AppRoute.Catalog} element={<CatalogScreen />} />
          <Route path ={AppRoute.Favorites} element={<FavoritesScreen />} />
          <Route path ={AppRoute.Product} element={ <ProductScreen />} />
          <Route path ={AppRoute.LogIn} element={<LoginScreen />} />
          <Route path ={AppRoute.SignUp} element={<SignUpScreen />} />
          <Route path='*'element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export default App;
