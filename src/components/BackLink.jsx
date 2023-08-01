import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='inline-flex items-center px-3 py-2 w-20 h-11 text-sm font-medium text-center  text-gray-900 hover:text-white bg-[#f0fdf4] rounded-lg hover:bg-lime-700 focus:ring-2 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-xl hover:shadow-md'
    >
      <HiArrowLeft className='w-4 h-4 space-x-3' />
      {children}
    </Link>
  );
};
