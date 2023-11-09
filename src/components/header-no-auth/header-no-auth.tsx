import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderNoAuth(): JSX.Element {
  const {pathname} = useLocation();
  const isIndexPage = pathname === AppRoute.Main;

  return(
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {
            isIndexPage ? (
              <a className="header__logo" href="index.html" aria-label="Переход на главную">
                <img src="img/svg/logo.svg" width={170} height={69} alt="Кондитерская кекс." />
              </a>
            )
              : (
                <Link className="header__logo" to={AppRoute.Main} aria-label="Переход на главную">
                  <img src="img/svg/logo.svg" width={170} height={69} alt="Кондитерская кекс." />
                </Link>

              )
          }

          <div className="header__buttons">
            <div className="header__btn">
              <Link className="btn btn--third header__link header__link--reg" to={AppRoute.SignUp}>Регистрация</Link>
            </div>
            <div className="header__btn">
              <Link className="btn" to={AppRoute.LogIn}>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNoAuth;
