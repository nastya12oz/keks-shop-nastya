import CatalogCard from '../catalog-card/catalog-card';
import { TProducts, TProductCardSmallList } from '../../types/product';

type CatalogListProps = {
  products: TProducts | TProductCardSmallList;
}


function CatalogList({products}: CatalogListProps): JSX.Element {


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
