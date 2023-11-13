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
import BackButton from '../../components/back-button/back-button';
import { ProductCategory, ProductType } from '../../const';
import FilterEmpty from '../../components/filter-empty.tsx/filter-empty';
import { Helmet } from 'react-helmet-async';

function CatalogScreen(): JSX.Element {

  const hasError = useAppSelector(getProductErrorStatus);
  const isDataLoading = useAppSelector(getProductsListLoadingStatus);
  const products = useAppSelector(getProductsList);
  const [selectedBase, setSelectedBase] = useState<ProductCategory | null>(null);
  const [selectedFillings, setSelectedFillings] = useState<ProductType[]>([]);


  const [displayedProductsCount, setdisplayedProductsCount] = useState(DISPLAYED_PRODUCTS_COUNT);


  const handleShowMoreButtonClick = () => {
    setdisplayedProductsCount((prevCount) => prevCount + DISPLAYED_PRODUCTS_COUNT);
  };

  const filteredProducts = products.filter((product) => {
    const baseMatches = selectedBase === null || product.category === selectedBase;
    const fillingsMatch = selectedFillings.length === 0 || selectedFillings.includes(product.type);

    return baseMatches && fillingsMatch;
  });


  const productsToShow = filteredProducts.slice(0, displayedProductsCount);


  if (isDataLoading && !hasError) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Каталог</title>
      </Helmet>
      <Header />

      {hasError ? (
        <CatalogError />
      ) : (
        <main>
          <BackButton />
          <CatalogFilter
            selectedBase={selectedBase}
            setSelectedBase={setSelectedBase}
            selectedFillings={selectedFillings}
            setSelectedFillings={setSelectedFillings}
          />
          <section className="catalog">
            <div className="container">
              <h2 className="visually-hidden">Каталог</h2>
              <div className="catalog__wrapper">
                {productsToShow.length > 0 ? (
                  <>
                    <CatalogList products={productsToShow} />
                    {displayedProductsCount < filteredProducts.length ? (
                      <CatalogButton onShowMoreButtonClick={handleShowMoreButtonClick} />
                    ) : (<CatalogButton toTop />)}

                  </>
                ) : (
                  <FilterEmpty />
                )}
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default CatalogScreen;
