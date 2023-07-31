import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';

import { selectPosts } from '../../store/posts/selectors';

export const PostsList = () => {
  const location = useLocation();
  const posts = useSelector(selectPosts);
  // console.log('LIST', posts);

  return (
    <>
      {posts?.length > 0 && (
        <>
          <ul className='container grid gap-4 md:grid-cols-2 mx-auto'>
            {posts?.map((post) => (
              <li
                key={post._id}
                className='flex flex-col max-w-sm md:max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"'
              >
                <>
                  {post.imageUrl && (
                    // <div className='flex p-2 h-[15rem] md:h-[25rem] rounded-md'>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className='w-full  h-[15rem] md:h-[25rem] object-cover rounded-t-lg'
                      loading='lazy'
                    />
                    // </div>
                  )}
                  <div className='mb-auto p-5'>
                    <div className='flex space-x-2 items-center justify-between'>
                      <span className='text-xs text-[#030303] opacity-50'>
                        Author: {post.owner.name}
                      </span>
                      <span className='text-xs text-[#030303] opacity-50'>
                        {post.createdAt.split('T')[0]}
                      </span>
                    </div>
                    <div className='flex flex-col flex-grow'>
                      <h3 className='flex-grow mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        {post.title}
                      </h3>
                      <p className='mt-2 text-xs text-[#030303] opacity-50'>#{post.tags[0]}</p>
                    </div>
                  </div>
                  <div className='flex flex-row items-center justify-between p-5'>
                    <div className='flex items-center gap-3'>
                      <button
                        type='button'
                        className='flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50'
                      >
                        <AiFillEye /> <span>{post.viewsCount}</span>
                      </button>
                      <button
                        type='button'
                        className='flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50'
                      >
                        <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
                      </button>
                    </div>
                    <NavLink
                      to={`${post._id}`}
                      state={{ from: location }}
                      className='inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-gray-900 hover:text-white bg-[#f0fdf4] rounded-lg hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-xl hover:shadow-md'
                    >
                      Read more
                    </NavLink>
                  </div>
                </>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
