import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogList from '../../components/catalog-list/catalog-list';
import { useAppSelector } from '../../hooks';
import { getFavorites, getFavoritesLoadingStatus, gesFavoritesErrorStatus } from '../../store/favorites-process/favorites-process.selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesNumber from '../../components/favorites-number/favorites-number';
import ClearFavoritesButton from '../../components/clear-favorites-button/clear-favorites-button';
import BackButton from '../../components/back-button/back-button';
import Loading from '../../components/loading/loading';
import ErrorScreen from '../error-screen/error-screen';
import { Helmet } from 'react-helmet-async';

function FavoritesScreen(): JSX.Element {

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getFavoritesLoadingStatus);
  const hasFavoritesError = useAppSelector(gesFavoritesErrorStatus);

  if(isFavoritesLoading) {
    return <Loading />;
  }

  if(hasFavoritesError) {
    return <ErrorScreen />;
  }


  return(
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Избранное</title>
      </Helmet>

      <Header />

      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>

          <BackButton />

          {favorites.length > 0 ? (

            <>
              <FavoritesNumber favorites={favorites} />

              <section className="favourites">

                <ClearFavoritesButton favorites={favorites} />

                <div className="container">
                  <h2 className="visually-hidden">Каталог</h2>
                  <div className="catalog__wrapper">
                    <CatalogList products={favorites} />
                  </div>
                </div>

              </section>
            </>
          ) : (
            <FavoritesEmpty />
          )}
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default FavoritesScreen;
