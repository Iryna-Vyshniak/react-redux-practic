import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/auth/selectors';
import { logOutThunk } from '../../store/auth/thunk';

export const UserNav = () => {
  const user = useSelector(getUser);
  // console.log('USER userNav', user);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className='flex space-x-1 items-center'>
      <img
        src={`http://localhost:3500/${user.avatarUrl}`}
        alt='avatar'
        className='w-6 h-6 rounded-full'
      />
      <span className='mr-2 text-lime-600 font-semibold'>{user.name},</span>
      <button
        onClick={onLogout}
        className='px-2 h-8 bg-lime-600 text-white rounded hover:bg-lime-700 transition duration-150 ease-in-out'
      >
        LogOut
      </button>
    </div>
  );
};
