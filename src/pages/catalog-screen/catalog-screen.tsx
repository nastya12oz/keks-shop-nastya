import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogButton from '../../components/catalog-button/catalog-button';
import CatalogList from '../../components/catalog-list/catalog-list';
import CatalogError from '../../components/catalog-error/catalog-error';
import { useAppSelector } from '../../hooks';
import { getProductErrorStatus, getProductsListLoadingStatus } from '../../store/products-data/products-data.selectors';
import Loading from '../../components/loading/loading';

function CatalogScreen(): JSX.Element {

  const hasError = useAppSelector(getProductErrorStatus);
  const isDataLoading = useAppSelector(getProductsListLoadingStatus);

  if (isDataLoading && !hasError) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      <Header />

      {
        hasError ? (
          <CatalogError />
        ) : (
          <main>
            <CatalogFilter />
            <CatalogList />
            <CatalogButton />
          </main>
        )
      }

      <Footer />
    </div>
  );
}

export default CatalogScreen;
