import { useSelector } from 'react-redux';
import { isUserLogin } from '../../../store/auth/selectors';
import { AuthNav } from './AuthNav';
// import { UserNav } from './UserNav';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className='flex justify-between items-center'>
      <NavbarMenu />
      {!isLogin && <AuthNav />}
      {/* {isLogin && <UserNav />} */}
    </div>
  );
};

export default Navbar;
