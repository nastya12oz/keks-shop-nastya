import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getIsAlreadyExistStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isAlreadyExist;
export const hasErrorStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].hasError;
export const isLoadingStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isLoading;
export const getEmail = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].email;
export const getAvatarUrl = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].avatarUrl;
export const getRegistrationSuccessStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isRegistrationSuccess;
