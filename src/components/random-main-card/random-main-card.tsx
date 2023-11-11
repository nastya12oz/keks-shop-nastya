import { TProductCardSmall } from '../../types/product';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddToFavoritesButtonInCatalog from '../add-to-favorites-button-in-catalog/add-to-favorites-button-in-catalog';

type RandomMainCardProps = {
  card: TProductCardSmall;
}

function RandomMainCard({ card }: RandomMainCardProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="card-item" onClick={() => navigate(`${AppRoute.Product}`.replace(':id', card.id))}>
      <a className="card-item__img-link" href="#">
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={card.previewImageWebp} />
            <img src={card.previewImage} width={326} height={332}alt={card.title} />
          </picture>
        </div>
      </a>
      <AddToFavoritesButtonInCatalog id={card.id} />
      <a className="card-item__link" href="#">
        <h3 className="card-item__title"><span>{card.title}</span></h3>
      </a>
    </div>
  );
}

export default RandomMainCard;
