import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../store/auth/selectors';
import { logOutThunk } from '../../../store/auth/thunk';

export const UserNav = () => {
  const user = useSelector(getUser);
  console.log('USER userNav', user);

  const dispatch = useDispatch();

  return (
    <div>
      {user.name}, <button onClick={() => dispatch(logOutThunk)}>LogOut</button>
    </div>
  );
};
