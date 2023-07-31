import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  const activeLink =
    'cursor-pointer py-3 text-sm font-semibold text-black-700 border-b-[3px] border-b-blue-700 transition duration-200 ease-in-out';

  return (
    <ul className='flex flex-col mb-5 md:mb-0 md:flex-row md:space-x-10'>
      <li className='mb-5 md:mb-0 py-3'>
        <NavLink
          to='/signup'
          className={({ isActive }) =>
            isActive
              ? activeLink
              : 'cursor-pointer md:px-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
          }
        >
          Register
        </NavLink>
      </li>
      <li className='py-3'>
        <NavLink
          to='/signin'
          className={({ isActive }) =>
            isActive
              ? activeLink
              : 'cursor-pointer md:px-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
          }
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
};
