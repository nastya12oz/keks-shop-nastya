import { TProductCardSmall } from '../../types/product';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


type CatalogCardProps = {
  product: TProductCardSmall;
}

function CatalogCard({product}: CatalogCardProps): JSX.Element {

  const { previewImage, previewImageWebp, title, price } = product;

  return(
    <div className="card-item card-item--big">
      <Link className="card-item__img-link" to={(`${AppRoute.Product}`.replace(':id', product.id))}>
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={previewImageWebp} />
            <img src={previewImage} width={326} height={332} alt={title} />
          </picture>
        </div>
      </Link>
      <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button><span className="card-item__price">{price} p</span>
      <Link className="card-item__link" to={(`${AppRoute.Product}`.replace(':id', product.id))}>
        <h3 className="card-item__title"><span>{title}</span></h3>
      </Link>
    </div>

  );
}

export default CatalogCard;
