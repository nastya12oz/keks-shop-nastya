import CatalogCard from '../catalog-card/catalog-card';
import { TProducts, TProductCardSmallList } from '../../types/product';

type CatalogListProps = {
  products: TProducts | TProductCardSmallList;
}


function CatalogList({products}: CatalogListProps): JSX.Element {


  return(
    <ul className="catalog__list">
      {products.map((product) => (
        <li key={product.id} className="catalog__item">
          <CatalogCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default CatalogList;
