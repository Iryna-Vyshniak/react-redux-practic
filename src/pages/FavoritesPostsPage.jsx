import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLikedPost } from '../store/posts/thunks';
import { Link, useParams } from 'react-router-dom';
import { getUser, selectFavoritesPosts } from '../store/auth/selectors';
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { BackLink } from '../components/BackLink';

const FavoritesPostsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getLikedPost(id));
  }, [dispatch, id]);

  const likedPosts = useSelector(selectFavoritesPosts);

  const user = useSelector(getUser);
  const BackLinkHref = location.state?.from ?? '/posts';

  const like = (post, user) => {
    if (post.likedBy.includes(user._id)) {
      return <BsHeartFill className='text-red-600' />;
    }
    return <BsHeart />;
  };

  // console.log(id);
  // console.log('User fav posts', user);

  return (
    <section className='flex flex-col gap-5 py-3'>
      <div className='px-4'>
        <BackLink to={BackLinkHref}>Posts</BackLink>
      </div>
      {likedPosts?.length > 0 ? (
        <ul className='container grid gap-4 md:grid-cols-2 mx-auto'>
          {likedPosts?.map((post) => (
            <li
              key={post._id}
              className='relative flex flex-col max-w-sm md:max-w-full bg-[var(--backgroundCard)] border border-gray-200 rounded-lg shadow '
            >
              <>
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className='w-full  h-[15rem] md:h-[25rem] object-cover rounded-t-lg'
                    loading='lazy'
                  />
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
                        <li key={tag}>#{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-row items-center justify-between p-5'>
                  <div className='flex items-center gap-3'>
                    {like(post, user)}
                    <span className='text-sm text-[var(--color-text)]  opacity-50'>
                      {post.likedBy.length}
                    </span>

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
      ) : (
        <>
          <h2 className='m-auto'>You haven`t got favorites posts yet...</h2>
        </>
      )}
    </section>
  );
};

export default FavoritesPostsPage;
