import { HiSearch } from 'react-icons/hi';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className='flex items-center justify-center mb-4 mt-4 uppercase'>
      <div className='relative inline-flex items-center justify-center mb-4 mt-4 uppercase'>
        <HiSearch className='absolute right-1 w-5 h-5 text-red-700' />
        <input
          className='px-2 py-2 pr-8 rounded font-inherit shadow-lg shadow-red-100'
          type='text'
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
