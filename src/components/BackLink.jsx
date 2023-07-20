import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='inline-flex items-center mb-4 py-2 px-1 text-blue-700 uppercase text-xs font-medium rounded-md shadow-lg transition duration-200 ease-in-out hover:bg-sky-50 hover:text-blue-400 hover:drop-shadow-md shadow-emerald-50'
    >
      <HiArrowLeft className='w-4 h-4 space-x-3' />
      {children}
    </Link>
  );
};
