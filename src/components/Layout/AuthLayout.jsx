import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileThunk } from '../../../store/auth/thunk';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return children;
};

export default AuthLayout;
