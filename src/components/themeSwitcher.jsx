import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

import { isDarkMode } from '../store/theme.js/selectors';
import { toggleTheme } from '../store/theme.js/slice';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(isDarkMode);

  const theme = darkMode ? 'light' : 'dark';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleThemeToggle}
      className='flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#f0fdf4] border-none cursor-pointer shadow-lg'
    >
      {darkMode ? (
        <BsMoonStarsFill size={16} className='text-yellow-400' />
      ) : (
        <BsFillSunFill size={16} className='text-yellow-400' />
      )}
    </button>
  );
};

export default ThemeSwitcher;
