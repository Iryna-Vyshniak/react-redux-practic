import { NavLink } from 'react-router-dom';

export const UserNav = () => {
  const activeLink =
    'cursor-pointer py-3 text-sm font-semibold text-black-700 border-b-[3px] border-b-blue-700 transition duration-200 ease-in-out';

  return (
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
          to='/products'
          className={({ isActive }) =>
            isActive
              ? activeLink
              : 'cursor-pointer px-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
          }
        >
          Products
        </NavLink>
      </li>
      <li className='py-3'>
        <NavLink
          to='/create-products'
          className={({ isActive }) =>
            isActive
              ? activeLink
              : 'cursor-pointer px-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
          }
        >
          Add Products
        </NavLink>
      </li>
      <li className='py-3'>
        <NavLink
          to='/counter'
          className={({ isActive }) =>
            isActive
              ? activeLink
              : 'cursor-pointer px-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
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
              : 'cursor-pointer px-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
          }
        >
          ToDo
        </NavLink>
      </li>
    </ul>
  );
};
