import classNames from 'classnames';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registrationAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserErrorStatus, getIsAlreadyExistStatus, getUserDataLoadingStatus, getRegistrationSuccessStatus } from '../../store/user-process/user-process.selector';
import { TUserRegistrationData } from '../../types/user';
import { isAvatarValid, isEmailValid, isRegistrationNameValid, isRegistrationPasswordValid } from '../../utils/utils';

function SignupScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const hasAlreadyExist = useAppSelector(getIsAlreadyExistStatus);
  const hasError = useAppSelector(getUserErrorStatus);
  const isLoading = useAppSelector(getUserDataLoadingStatus);
  const isRegistrationSuccess = useAppSelector(getRegistrationSuccessStatus);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
  });

  const [falseForm, setFalseForm] = useState({
    name: false,
    email: false,
    password: false,
    avatar: false,
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
    avatar: true,
  });

  const [isError, setIsError] = useState({
    exist: false,
    error: false,
  });

  useEffect(() => {
    setIsValid({
      name: isRegistrationNameValid(formState.name),
      email: isEmailValid(formState.email),
      password: isRegistrationPasswordValid(formState.password),
      avatar: true,
    });
  }, [formState, falseForm]);

  useEffect(() => {
    setIsError({
      exist: hasAlreadyExist,
      error: hasError,
    });
  }, [hasError, hasAlreadyExist]);

  const handlerBlur = (evt: ChangeEvent<HTMLInputElement>) => {
    switch (evt.target.name) {
      case 'name':
        setFalseForm({...falseForm, name: true});
        break;
      case 'email':
        setFalseForm({...falseForm, email: true});
        break;
      case 'password':
        setFalseForm({...falseForm, password: true});
        break;
      case 'avatar':
        setFalseForm({...falseForm, avatar: true});
        break;
    }
  };

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    setFormState({...formState, [name]: value});

    setIsValid({
      name: isRegistrationNameValid(formState.name),
      email: isEmailValid(formState.email),
      password: isRegistrationPasswordValid(formState.password),
      avatar: true,
    });
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as TUserRegistrationData;
    const currentData = {...formState, avatar: data.avatar};

    setIsValid({...isValid, avatar: isAvatarValid(data.avatar)});

    if (currentData && isValid.avatar && isValid.email && isValid.name && isValid.password) {
      dispatch(registrationAction(currentData));
      setIsError({
        exist: hasAlreadyExist,
        error: hasError,
      });
    }

    if (!isLoading && !hasError) {
      setFormState({
        name: '',
        email: '',
        password: '',
        avatar: null,
      });
      setIsValid({
        name: true,
        email: true,
        password: true,
        avatar: true,
      });
      setFalseForm({
        name: false,
        email: false,
        password: false,
        avatar: false,
      });
    }
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Регистрация</title>
      </Helmet>
      <main>
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img className="register-page__img" src="img/svg/hero-keks.svg" width={727} height={569} alt="Картинка кота."/>
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              {isError.exist && <p>You have already been here!</p>}
              {isError.error && <p>Oops seems something is wrong, try again!</p>}
              {isRegistrationSuccess && <p>Great! You are all set. Please, log in</p>}
              <div className="register-page__form">
                <form
                  action="#"
                  method="post"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="register-page__fields">
                    <div className={classNames('custom-input register-page__field',
                      {'is-valid' : isValid.name},
                      {'is-invalid' : !isValid.name}
                    )}
                    >
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          placeholder="Имя"
                          onChange={handleFieldChange}
                          onBlur={handlerBlur}
                        />
                      </label>
                      {!isValid.name && falseForm.name && <span className="custom-input__message">заполните поле</span>}
                    </div>
                    <div className={classNames('custom-input register-page__field',
                      {'is-valid' : isValid.email},
                      {'is-invalid' : !isValid.email}
                    )}
                    >
                      <label><span className="custom-input__label">Введите корректную почту</span>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          placeholder="Почта"
                          onChange={handleFieldChange}
                          onBlur={handlerBlur}
                        />
                      </label>
                      {!isValid.email && falseForm.email && <span className="custom-input__message">Введите вашу почту</span>}
                    </div>
                    <div className={classNames('custom-input register-page__field',
                      {'is-valid' : isValid.password},
                      {'is-invalid' : !isValid.password}
                    )}
                    >
                      <label><span className="custom-input__label">заполните поле</span>
                        <input
                          type="password"
                          name="password"
                          value={formState.password}
                          placeholder="Пароль"
                          onChange={handleFieldChange}
                          onBlur={handlerBlur}
                        />
                      </label>
                      {!isValid.password && falseForm.password && <span className="custom-input__message">заполните поле</span>}
                    </div>
                    <div className={classNames('custom-input register-page__field',
                      {'file-selected': formState.avatar}
                    )}
                    >
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          type="file"
                          name="avatar"
                          data-text='Аватар'
                          accept="image/jpeg, image/png"
                          onChange={handleFieldChange}
                          onBlur={handlerBlur}
                        />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn register-page__btn btn--large"
                    type="submit"
                    disabled={
                      !isValid.avatar ||
                      !isValid.email ||
                      !isValid.name ||
                      !isValid.password
                      || isLoading
                    }
                  >Зарегистрироваться
                  </button>
                </form>
              </div>
              <p className="register-page__text-wrap">Уже зарегистрированы?
                <Link className="register-page__link" to={AppRoute.LogIn}>Войдите</Link> в свой аккаунт.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignupScreen;
