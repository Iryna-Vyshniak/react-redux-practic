import { useDispatch } from 'react-redux';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { logOutThunk } from '../../../store/auth/thunk';

export const UserMenu = ({ showModal }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className='absolute top-0 right-0 mt-10 mr-2 p-4 w-56 bg-white shadow'>
      <button
        type='button'
        onClick={() => showModal()}
        className='flex items-center justify-between w-full mb-7'
      >
        <span>Edit profile</span>
        <CiEdit />
      </button>
      <button
        onClick={onLogout}
        className='flex items-center justify-between px-2 h-8 w-full bg-lime-600 text-white rounded rounded-tl-xl rounded-br-xl hover:bg-lime-700 transition duration-150 ease-in-out'
      >
        <span>Log Out</span>
        <RiLogoutCircleRLine />
      </button>
    </div>
  );
};
