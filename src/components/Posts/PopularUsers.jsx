import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../store/auth/selectors';
import { getAllUsersThunk } from '../../store/auth/thunk';

export const PopularUsers = () => {
  const dispatch = useDispatch();
  const popularUsers = useSelector(getUsers);
  // console.log(popularUsers);

  const mostPopularUsers = popularUsers?.length > 3 ? popularUsers?.slice(0, 3) : popularUsers;

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <>
      {mostPopularUsers?.length > 0 && (
        <ul className='flex flex-wrap items-center justify-center space-x-2 md:flex-col md:space-x-0 w-full'>
          {mostPopularUsers?.map((user) => (
            <li key={user._id} className='mb-3 w-[120px]'>
              <Link
                to={{
                  pathname: `/posts/users/${user.name}`,
                  state: { from: location },
                }}
                className='flex items-center justify-evenly p-2 text-xs text-[var(--color-text)] text-center bg-[var(--button-color-active)] rounded-lg hover:bg-[var(--buttonHover)] focus:ring-2 focus:outline-none focus:ring-green-300 shadow-xl hover:shadow-md'
              >
                {user.avatarUrl && (
                  <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-slate-80 shadow-lg'>
                    <img
                      src={user.avatarUrl}
                      alt='avatar'
                      className='w-[24px] h-[24px] rounded-full object-cover object-center'
                      loading='lazy'
                    />
                  </div>
                )}
                <div>
                  <p className='text-xs text-[var(--color-text)] opacity-50 font-bold'>
                    {user.name}
                  </p>
                  <p className='text-xs text-[var(--color-text)] opacity-50'>
                    {user.posts.length} posts
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
