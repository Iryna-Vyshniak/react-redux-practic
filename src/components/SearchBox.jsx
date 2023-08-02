import { HiSearch } from 'react-icons/hi';
import DebounceInput from 'react-debounce-input';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className='flex items-center justify-center mb-4 mt-4 uppercase'>
      <div className='relative inline-flex items-center justify-center mb-4 mt-4 uppercase'>
        <HiSearch className='absolute right-1 w-5 h-5 text-red-700' />
        <DebounceInput
          className='px-2 py-2 pr-8 w-[60vw] rounded-2xl font-inherit shadow-lg outline-none border-none'
          type='search'
          value={value}
          onChange={onChange}
          debounceTimeout={1000}
        />
      </div>
    </div>
  );
};
