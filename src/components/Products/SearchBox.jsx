import { HiSearch } from 'react-icons/hi';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className='relative inline-flex items-center mb-4 mt-4 uppercase'>
      <HiSearch className='absolute right-1 w-5 h-5' />
      <input
        className='px-2 py-2 pr-8 rounded font-inherit'
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
