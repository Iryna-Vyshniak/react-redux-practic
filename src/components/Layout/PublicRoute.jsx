import { useSelector } from 'react-redux';
import { isUserLogin } from '../../../store/auth/selectors';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};

export default PublicRoute;
