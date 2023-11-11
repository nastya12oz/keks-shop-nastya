import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogList from '../../components/catalog-list/catalog-list';
import { useAppSelector } from '../../hooks';
import { getFavorites, getFavoritesLoadingStatus, gesFavoritesErrorStatus } from '../../store/favorites-process/favorites-process.selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesNumber from '../../components/favorites-number/favorites-number';
import ClearFavoritesButton from '../../components/clear-favorites-button/clear-favorites-button';
import BackButton from '../../components/back-button/back-button';


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

          <BackButton />

          {favorites.length > 0 ? (

            <>
              <FavoritesNumber favorites={favorites} />

              <section className="favourites">

                <ClearFavoritesButton favorites={favorites} />
                <CatalogList products={favorites} />

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
