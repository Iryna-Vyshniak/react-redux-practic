import { useSelector } from 'react-redux';
import { isUserLogin } from '../../store/auth/selectors';
import { AuthNav } from './AuthNav';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <>
      <NavbarMenu />
      {!isLogin && <AuthNav />}
    </>
  );
};

export default Navbar;
