import HeaderAuth from '../header-auth/header-auth';
import HeaderNoAuth from '../header-no-auth/header-no-auth';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';


function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  console.log(authorizationStatus);

  return(
    isAuthorized ? <HeaderAuth /> : <HeaderNoAuth />
  );
}

export default Header;
