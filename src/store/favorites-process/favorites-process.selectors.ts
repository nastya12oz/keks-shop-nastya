import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TProducts } from '../../types/product';


export const getFavorites = (state: Pick<State, NameSpace.Favorites>): TProducts => state[NameSpace.Favorites].favorites;
export const getFavoritesLoadingStatus = (state: Pick<State, NameSpace.Favorites>): boolean => state[NameSpace.Favorites].isFavoritesLoading;
export const gesFavoritesErrorStatus = (state: Pick<State, NameSpace.Favorites>): boolean => state[NameSpace.Favorites].hasFavoritesError;
export const gesFavoritesDeletingStatus = (state: Pick<State, NameSpace.Favorites>): boolean => state[NameSpace.Favorites].isFavoritesDeleting;
