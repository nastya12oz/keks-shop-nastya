import { formatKeksCount } from '../../utils/utils';
import { TProducts } from '../../types/product';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoritesNumberProps = {
  favorites: TProducts;
}

function FavoritesNumber({favorites}: FavoritesNumberProps): JSX.Element {

  const keksNumber = favorites.length;
  const formattedCount = formatKeksCount(keksNumber);
  const keksPrice = favorites.reduce((total, favorite) => total + favorite.price, 0);
  const formattedKeksPrice = new Intl.NumberFormat('ru-RU').format(keksPrice);

  return(
    <section className="number-of-favourites favorites-page__qty">
      <div className="container">
        <h2 className="visually-hidden">Количество товаров в избранном.</h2>
        <p className="number-of-favourites__cakes">{keksNumber} {formattedCount}</p>
        <div className="number-of-favourites__wrapper">
          <div className="number-of-favourites__wrap-price">
            <p className="number-of-favourites__text">Всего</p>
            <p className="number-of-favourites__price">{formattedKeksPrice}&nbsp;р</p>
          </div>
        </div>
        <div className="number-of-favourites__button">
          <Link className="btn" to={AppRoute.Catalog}>В каталог</Link>
        </div>
      </div>
    </section>
  );
}

export default FavoritesNumber;
