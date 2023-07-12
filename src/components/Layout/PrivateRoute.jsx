import { useSelector } from 'react-redux';
import { getAuth } from '../../../store/auth/selectors';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);
  const navigate = useNavigate();

  if (!isLogin && token) {
    return <p>Loading...</p>;
  }

  if (!isLogin && !token) {
    return navigate('/signin');
  }

  return <Outlet />;
};

export default PrivateRoute;
