import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackLink } from '../components/BackLink';
import { PostsList } from '../components/Posts/PostsList';
import { selectIsLoading, selectPosts } from '../store/posts/selectors';
import { getPostsByUser } from '../store/posts/thunks';
import { useParams } from 'react-router-dom';

const UsersPostsPage = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const backLinkHref = location.state?.from ?? '/posts';
  const { user } = useParams();

  useEffect(() => {
    dispatch(getPostsByUser(user));
  }, [dispatch, user]);

  return (
    <>
      <div className='flex items-center space-x-5'>
        <BackLink to={backLinkHref}>Posts</BackLink>
        <p className='flex items-center justify-center px-3 py-2 w-20 h-11 text-sm text-[var(--color-text)] text-center uppercase bg-[var(--button-color-active)] rounded-lg shadow-xl'>
          {user}
        </p>
      </div>

      <section className='p-5 min-h-[85vh]'>
        {isLoading ? (
          <div className='text-[var(--color-text)]'>...Loading</div>
        ) : posts?.length > 0 ? (
          <div className='w-full flex flex-col gap-6 md:basis-4/5'>
            <PostsList />
          </div>
        ) : (
          <h2 className='m-auto'>Posts not found...</h2>
        )}
      </section>
    </>
  );
};

export default UsersPostsPage;
