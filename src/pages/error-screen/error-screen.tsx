import { Helmet } from 'react-helmet-async';

function ErrorScreen(): JSX.Element {
  return(
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - 404</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a className="header__logo" href="index.html" aria-label="Переход на главную">
              <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
            </a>
            <div className="header__buttons">
              <div className="header__btn">
                <a className="btn btn--third header__link header__link--reg" href="register-page.html">Регистрация</a>
              </div>
              <div className="header__btn">
                <a className="btn" href="login-page.html">Войти</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1 className="visually-hidden">404</h1>
        <section className="error-page">
          <div className="container">
            <h2 className="error-page__title">404</h2>
            <p className="error-page__message">Страница не найдена</p>
            <p className="error-page__text">Она была удалена<br>или</br>вы&nbsp;указали неправильный адрес.
            </p>
            <div className="error-page__button">
              <a className="btn btn--large" href="index.html">Вернуться&nbsp;на&nbsp;главную
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ErrorScreen;
