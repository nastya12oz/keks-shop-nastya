import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogList from '../../components/catalog-list/catalog-list';
import { useAppSelector } from '../../hooks';
import { getFavorites, getFavoritesLoadingStatus, gesFavoritesErrorStatus } from '../../store/favorites-process/favorites-process.selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesNumber from '../../components/favorites-number/favorites-number';


function FavoritesScreen(): JSX.Element {

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getFavoritesLoadingStatus);
  const hasFavoritesError = useAppSelector(gesFavoritesErrorStatus);


  return(
    <div className="wrapper">
      <Header />

      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <div className="back-link">
            <div className="container">
              <a className="back-link__link" href="#">Назад
                <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-left"></use>
                </svg>
              </a>
            </div>
          </div>

          {favorites.length > 0 ? (

            <>
              <FavoritesNumber favorites={favorites} />
              <section className="favourites">
                <div className="container">
                  <h2 className="visually-hidden">Избранные товары</h2>
                  <div className="favourites__button">
                    <button className="btn btn--second" type="button">Очистить</button>
                  </div>
                </div>
                <CatalogList products={favorites} />
              </section>
            </>
          ) : (
            <FavoritesEmpty />
          ) }


        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
