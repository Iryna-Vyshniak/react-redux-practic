import { useSelector } from 'react-redux';
import { getUser } from '../../../store/auth/selectors';
import { ModalComponent } from '../../Modal/ModalComponent';
import { UpdateUserForm } from './updateUserForm';
import { useState } from 'react';
import { UserMenu } from './UserMenu';

export const UserNav = () => {
  const [isShowUserMenu, setIsShowUserMenu] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const user = useSelector(getUser);

  const toggleEditUserMenu = () => {
    setIsShowUserMenu(!isShowUserMenu);
  };

  const toggleShowModal = () => {
    setIsShowEditModal(!isShowEditModal);
    setIsShowUserMenu(false);
  };

  return (
    <>
      <div className='relative flex items-center'>
        <button
          onClick={toggleEditUserMenu}
          className='flex items-center justify-center border-0 outline-none'
        >
          <div className='mr-2 w-6 h-6 rounded-full object-cover object-center'>
            {user.avatarUrl && (
              <img
                src={
                  user.avatarUrl
                    ? `http://localhost:3500/${user.avatarUrl}`
                    : `https://source.unsplash.com/360x360?${user.name}`
                }
                alt='avatar'
                className='mr-2 w-6 h-6 rounded-full object-cover object-center'
              />
            )}
          </div>

          <span className='mr-2 text-lime-600 font-semibold'>{user.name}</span>
        </button>

        {isShowUserMenu && <UserMenu showModal={toggleShowModal} />}
      </div>
      {isShowEditModal && (
        <ModalComponent modalIsOpen={isShowEditModal} closeModal={toggleShowModal}>
          <UpdateUserForm closeModal={toggleShowModal} />
        </ModalComponent>
      )}
    </>
  );
};
