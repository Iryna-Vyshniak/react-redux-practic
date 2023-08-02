import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';

import { selectPosts } from '../../store/posts/selectors';

export const PostsList = () => {
  const location = useLocation();
  const posts = useSelector(selectPosts);
  // console.log('LIST', posts);

  return (
    <>
      {posts?.length > 0 && (
        <ul className='container grid gap-4 md:grid-cols-2 mx-auto'>
          {posts?.map((post) => (
            <li
              key={post._id}
              className='flex flex-col max-w-sm md:max-w-full bg-[var(--backgroundCard)] border border-gray-200 rounded-lg shadow '
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
                    <span className='text-xs text-[var(--color-text)] opacity-50'>
                      Author: {post.owner.name}
                    </span>
                    <span className='text-xs text-[var(--color-text)] opacity-50'>
                      {post.createdAt.split('T')[0]}
                    </span>
                  </div>
                  <div className='flex flex-col flex-grow'>
                    <h3 className='flex-grow mb-2 text-2xl font-bold tracking-tight text-[var(--color-text)] '>
                      {post.title}
                    </h3>
                    <ul className='mt-2 text-xs text-[var(--color-text)]  opacity-50'>
                      {post.tags.map((tag) => (
                        <li key={tag}>
                          <Link to={`tags/${tag}`}>#{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-row items-center justify-between p-5'>
                  <div className='flex items-center gap-3'>
                    <button
                      type='button'
                      className='flex items-center justify-center gap-2 text-sm text-[var(--color-text)]  opacity-50'
                    >
                      <AiFillEye /> <span>{post.viewsCount}</span>
                    </button>
                    <button
                      type='button'
                      className='flex items-center justify-center gap-2 text-sm text-[var(--color-text)]  opacity-50'
                    >
                      <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
                    </button>
                  </div>
                  <Link
                    to={{
                      pathname: `/posts/${post._id}`,
                      state: { from: location },
                    }}
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-[var(--button-color-text)] bg-[var(--button-color-active)] rounded-lg hover:bg-[var(--buttonHover)] focus:ring-2 focus:outline-none focus:ring-green-300 shadow-xl hover:shadow-md'
                  >
                    Read more
                  </Link>
                </div>
              </>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
