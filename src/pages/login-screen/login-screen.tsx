import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getUserErrorStatus } from '../../store/user-process/user-process.selector';
import { useAppSelector, useAppDispatch } from '../../hooks';
import classNames from 'classnames';
import { useState, FormEvent } from 'react';
import { isEmailValid, isRegistrationPasswordValid } from '../../utils/utils';
import { TAuthData } from '../../types/user';
import { loginAction } from '../../store/api-actions';
import { Helmet } from 'react-helmet-async';


function LoginScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const hasError = useAppSelector(getUserErrorStatus);
  const [isInputEmailValid, setEmailValid] = useState(true);
  const [isInputPasswordValid, setPasswordValid] = useState(true);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as TAuthData;
    setPasswordValid((isRegistrationPasswordValid(data.password)));
    setEmailValid(isEmailValid(data.email));

    if (data !== null && isInputEmailValid && isInputPasswordValid) {
      dispatch(loginAction(data));
    }
  };

  return(
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Login</title>
      </Helmet>
      <main>
        <section className="login-page">
          <div className="login-page__header">
            <div className="login-page__img-wrap">
              <img className="login-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />

            </div>
          </div>
          <div className="login-page__content">
            <div className="login-page__inner">
              <h1 className="login-page__title">Вход</h1>
              {hasError && <p>En error occured!</p>}

              <div className="login-page__form">

                <form
                  action="#"
                  method="post"
                  autoComplete="off"
                  onSubmit={handleFormSubmit}
                >
                  <div className="login-page__fields">
                    <div className={classNames('custom-input', 'login-page__field',
                      {'is-valid' : isInputEmailValid},
                      {'is-invalid': !isInputEmailValid}
                    )}
                    >
                      <label><span className="custom-input__label">Введите вашу почту</span>
                        <input type="email" name="email" placeholder="Почта" required />
                      </label>
                    </div>
                    <div className={classNames('custom-input', 'login-page__field',
                      {'is-valid' : isInputPasswordValid},
                      {'is-invalid': !isInputPasswordValid}
                    )}
                    >
                      <label><span className="custom-input__label">Введите ваш пароль</span>
                        <input type="password" name="password" placeholder="Пароль" required />
                      </label>
                    </div>
                  </div>
                  <button className="btn login-page__btn btn--large" type="submit">Войти</button>
                </form>

              </div>
              <p className="login-page__text-wrap">Ещё не зарегистрированы? <Link className="login-page__link" to={AppRoute.SignUp}>Создайте</Link> аккаунт прямо сейчас.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginScreen;
