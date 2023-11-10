import { useAppSelector } from '../../hooks';
import { getProductsList } from '../../store/products-data/products-data.selectors';
import CatalogCard from '../catalog-card/catalog-card';


function CatalogList(): JSX.Element {
  const products = useAppSelector(getProductsList);


  return(
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {products.map((product) => (
              <li key={product.id} className="catalog__item">
                <CatalogCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  );
}

export default CatalogList;
