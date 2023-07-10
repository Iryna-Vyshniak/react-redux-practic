import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='inline-flex items-center py-2 px-1 text-blue-700 uppercase font-medium rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-md shadow-emerald-50'
    >
      <HiArrowLeft size='24' />
      {children}
    </Link>
  );
};
