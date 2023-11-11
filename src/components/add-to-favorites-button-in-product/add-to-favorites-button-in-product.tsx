import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/favorites-process/favorites-process.selectors';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { fetchAddFavoritesAction, fetchDeleteFavoritesAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { AuthorizationStatus } from '../../const';

type AddToFavoritesButtonInProductProps = {
  id: string;
}

function AddToFavoritesButtonInProduct({id}: AddToFavoritesButtonInProductProps): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavorite = favorites.some((favorite) => favorite.id === id);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  function handleFavoriteClick() {
    if (isAuthorized) {
      if (isFavorite) {
        dispatch(fetchDeleteFavoritesAction(id));
      } else {
        dispatch(fetchAddFavoritesAction(id));
      }
    } else {
      navigate(AppRoute.LogIn);
    }
  }

  return(
    <button
      className={classNames('item-details__like-button', {'item-details__like-button--active' : isFavorite})}
      onClick={handleFavoriteClick}
    >
      <span className="visually-hidden">Добавить в избранное</span>
      <svg width={45} height={37} aria-hidden="true">
        <use xlinkHref="#icon-like"></use>
      </svg>
    </button>
  );
}

export default AddToFavoritesButtonInProduct;
