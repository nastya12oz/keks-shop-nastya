import { TProductCardSmall } from '../../types/product';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddToFavoritesButtonInCatalog from '../add-to-favorites-button-in-catalog/add-to-favorites-button-in-catalog';


type CatalogCardProps = {
  product: TProductCardSmall;
}

function CatalogCard({product}: CatalogCardProps): JSX.Element {

  const { id, previewImage, previewImageWebp, title, price, isNew } = product;

  return(
    <div className="card-item card-item--big">
      <Link className="card-item__img-link" to={(`${AppRoute.Product}`.replace(':id', product.id))}>
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={previewImageWebp} />
            <img src={previewImage} width={326} height={332} alt={title} />
          </picture>
        </div>
        {isNew && <span className="card-item__label">Новинка</span>}
      </Link>
      <AddToFavoritesButtonInCatalog id={id} />
      <span className="card-item__price">{price} p</span>
      <Link className="card-item__link" to={(`${AppRoute.Product}`.replace(':id', product.id))}>
        <h3 className="card-item__title"><span>{title}</span></h3>
      </Link>
    </div>

  );
}

export default CatalogCard;
