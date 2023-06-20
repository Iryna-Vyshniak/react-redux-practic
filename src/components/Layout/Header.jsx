import { Link, NavLink } from 'react-router-dom';
import { SiDeepnote } from 'react-icons/si';

const Header = () => {
  const activeLink =
    'cursor-pointer py-3 text-sm font-semibold text-black-700 border-b-[3px] border-b-blue-700 transition duration-200 ease-in-out';

  return (
    <div className='sticky top-0 z-40 bg-white border-b shadow-sm'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <Link to='/'>
            <SiDeepnote className='h-5 cursor-pointer text-red-700 hover:text-blue-700' />
          </Link>
        </div>
        <nav>
          <ul className='flex space-x-10'>
            <li className='py-3'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : 'cursor-pointer px-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
                }
              >
                Home
              </NavLink>
            </li>
            <li className='py-3'>
              <NavLink
                to='/counter'
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : 'cursor-pointer px-3 text-sm font-semibold text-slate-600 border-b-[3px] border-b-transparent'
                }
              >
                Counter
              </NavLink>
            </li>
            <li className='py-3'>
              <NavLink
                to='/todo'
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : 'cursor-pointer px-3 text-sm font-semibold text-slate-600 border-b-[3px] border-b-transparent'
                }
              >
                ToDo
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
