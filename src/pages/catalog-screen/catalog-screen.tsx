import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogButton from '../../components/catalog-button/catalog-button';

function CatalogScreen(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <CatalogFilter />
      <CatalogButton />
      <Footer />
    </div>
  );
}

export default CatalogScreen;
