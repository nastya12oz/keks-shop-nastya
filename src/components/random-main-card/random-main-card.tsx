import { TProductCardSmall } from '../../types/product';

type RandomMainCardProps = {
  card: TProductCardSmall;
}

function RandomMainCard({ card }: RandomMainCardProps): JSX.Element {
  return (
    <div className="card-item">
      <a className="card-item__img-link" href="#">
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet={card.previewImageWebp} />
            <img src={card.previewImage} width={326} height={332}alt={card.title} />
          </picture>
        </div>
      </a>
      <button className="card-item__favorites">
        <span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      <a className="card-item__link" href="#">
        <h3 className="card-item__title"><span>{card.title}</span></h3>
      </a>
    </div>
  );
}

export default RandomMainCard;
