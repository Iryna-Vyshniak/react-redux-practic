import { useSelector } from 'react-redux';
import { getAuth } from '../../store/auth/selectors';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>Loading...</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to='/signin' />;
  }

  return <Outlet />;
};

export default PrivateRoute;
