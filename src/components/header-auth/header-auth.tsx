import { useAppSelector } from '../../hooks';
import { getEmail, getAvatarUrl } from '../../store/user-process/user-process.selector';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getFavorites } from '../../store/favorites-process/favorites-process.selectors';


function HeaderAuth(): JSX.Element {
  const userEmail = useAppSelector(getEmail);
  const userAvatarUrl = useAppSelector(getAvatarUrl);
  const favorites = useAppSelector(getFavorites);
  const favoritesCount = favorites.length;


  return(
    <header className="header header--authorized">
      <div className="container">
        <div className="header__inner">
          <span className="header__logo">
            <img src="img/svg/logo.svg" width={170} height={69} alt="Кондитерская кекс." />
          </span>
          <div className="header__user-info-wrap">
            <div className="header__user-info">
              <div className="header__user-avatar">
                <picture>
                  <source type="image/webp" srcSet={userAvatarUrl} />
                  <img src={userAvatarUrl} width={62} height={62} alt="Аватар пользователя." />
                </picture>
              </div>
              <p className="header__user-mail">{userEmail}</p>
            </div>
          </div>
          <div className="header__buttons">
            <Link className="header__favourite" to={AppRoute.Favorites}>
              <span className="header__favourite-icon">
                <svg width="33" height="29" aria-hidden="true">
                  <use xlinkHref="#icon-favourite"></use>
                </svg>
              </span>
              <span className="header__favourite-number">{favoritesCount}</span>
              <span className="visually-hidden">Избранное</span>
            </Link>
            <div className="header__buttons-authorized">
              <div className="header__btn">
                <a className="btn btn--second" href="#">Выйти</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderAuth;
