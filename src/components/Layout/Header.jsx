import { Link, useLocation } from 'react-router-dom';
import { IoLogoIonic } from 'react-icons/io';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

import Navbar from './Navbar';
import { UserNav } from './User/UserNav';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../store/auth/selectors';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

  const isLogin = useSelector(isUserLogin);

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  return (
    // <header className='sticky top-0 left-0 z-40 w-full bg-white border-b shadow-xl'>
    //   <div className='md:flex items-center justify-between mx-auto md:px-10 px-7 max-w-6xl'>
    //     <Link to='/' className='flex items-center my-7 md:my-0 font-[Poppins] cursor-pointer'>
    //       <IoLogoIonic className='mr-1 text-xl cursor-pointer text-blue-700 hover:text-red-700' />
    //       <span className=' text-blue-700 text-xl font-semibold'>WorkShopDev</span>{' '}
    //     </Link>
    //     <div onClick={toggleMenu} className='absolute right-8 top-8 md:hidden cursor-pointer'>
    //       {isOpenMenu ? (
    //         <IoMdClose className='font-bold text-xl' />
    //       ) : (
    //         <IoMdMenu className='font-bold text-xl' />
    //       )}
    //     </div>

    //     {isOpenMenu ? (
    //       <nav
    //         className={`absolute top-17 left-0 opacity-100 pl-8 w-full bg-sky-50 transition-all duration-500 ease-in-out shadow-2xl`}
    //       >
    //         {isLogin && <UserNav />}
    //         <Navbar />
    //       </nav>
    //     ) : (
    //       <nav
    //         className={`hidden md:flex md:flex-row-reverse md:items-center md:justify-between md:bg-transparent transition-all duration-500 ease-in-out shadow-2xl md:shadow-none`}
    //       >
    //         {isLogin && <UserNav />}
    //         <Navbar />
    //       </nav>
    //     )}
    //   </div>
    // </header>
    <header className='sticky top-0 left-0 z-40 w-full bg-white border-b shadow-xl'>
      <div className='md:flex items-center justify-between mx-auto md:px-10 px-7 max-w-6xl'>
        <Link to='/' className='flex items-center my-7 md:my-0 font-[Poppins] cursor-pointer'>
          <IoLogoIonic className='mr-1 text-xl cursor-pointer text-blue-700 hover:text-red-700' />
          <span className='text-blue-700 text-xl font-semibold'>WorkShopDev</span>
        </Link>
        <div onClick={toggleMenu} className='fixed right-8 top-8 md:hidden cursor-pointer'>
          {isOpenMenu ? (
            <IoMdClose className='font-bold text-xl' />
          ) : (
            <IoMdMenu className='font-bold text-xl' />
          )}
        </div>

        <nav
          className={`md:flex md:flex-row-reverse md:items-center md:justify-between md:bg-transparent md:shadow-2xl ${
            isOpenMenu ? 'block ' : 'hidden'
          }`}
        >
          {isLogin && <UserNav />}
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
