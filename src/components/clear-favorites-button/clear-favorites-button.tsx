import { gesFavoritesDeletingStatus } from '../../store/favorites-process/favorites-process.selectors';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchDeleteFavoritesAction } from '../../store/api-actions';
import { TProducts } from '../../types/product';

type ClearFavoritesButtonProps = {
  favorites: TProducts;
}


function ClearFavoritesButton({favorites}: ClearFavoritesButtonProps): JSX.Element {

  const isDeleting = useAppSelector(gesFavoritesDeletingStatus);
  const favoriteIDs = favorites.map((favorite) => favorite.id);
  const dispatch = useAppDispatch();

  function hanldeClearClick() {
    favoriteIDs.map((id) => dispatch(fetchDeleteFavoritesAction(id)));
  }

  return(
    <div className="container">
      <h2 className="visually-hidden">Избранные товары</h2>
      <div className="favourites__button">
        <button disabled={isDeleting} className="btn btn--second" type="button" onClick={hanldeClearClick}>Очистить</button>
      </div>
    </div>
  );
}

export default ClearFavoritesButton;
