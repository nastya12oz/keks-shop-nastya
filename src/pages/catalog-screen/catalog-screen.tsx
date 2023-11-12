import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogButton from '../../components/catalog-button/catalog-button';
import CatalogList from '../../components/catalog-list/catalog-list';
import CatalogError from '../../components/catalog-error/catalog-error';
import { useAppSelector } from '../../hooks';
import { getProductErrorStatus, getProductsListLoadingStatus } from '../../store/products-data/products-data.selectors';
import Loading from '../../components/loading/loading';
import { getProductsList } from '../../store/products-data/products-data.selectors';
import { DISPLAYED_PRODUCTS_COUNT } from '../../const';
import { useState } from 'react';


function CatalogScreen(): JSX.Element {

  const hasError = useAppSelector(getProductErrorStatus);
  const isDataLoading = useAppSelector(getProductsListLoadingStatus);
  const products = useAppSelector(getProductsList);

  const [displayedProductsCount, setdisplayedProductsCount] = useState(DISPLAYED_PRODUCTS_COUNT);

  const productsToShow = products.slice(0, displayedProductsCount);

  const handleShowMoreButtonClick = () => {
    setdisplayedProductsCount((prevCount) => prevCount + DISPLAYED_PRODUCTS_COUNT);
  };


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
            <section className="catalog">
              <div className="container">
                <h2 className="visually-hidden">Каталог</h2>
                <div className="catalog__wrapper">
                  <CatalogList products={productsToShow} />
                  {productsToShow.length < products.length ? <CatalogButton onShowMoreButtonClick={handleShowMoreButtonClick} />
                    : <CatalogButton toTop />}
                </div>
              </div>
            </section>
          </main>
        )
      }

      <Footer />
    </div>
  );
}

export default CatalogScreen;
