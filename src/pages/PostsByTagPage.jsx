import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectIsLoading,
  selectPosts,
  selectTotalPages,
} from '../store/posts/selectors';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPostsByTag } from '../store/posts/thunks';
import { PostsList } from '../components/Posts/PostsList';
import { Pagination } from '../components/Pagination';
import { BackLink } from '../components/BackLink';

const PostsByTagPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const page = Number(searchParams.get('page') || 1);
  const { tag } = useParams();
  const location = useLocation();
  const BackLinkHref = location.state?.from ?? '/posts';

  useEffect(() => {
    dispatch(getPostsByTag({ tag, page }));
  }, [dispatch, tag, page]);

  return (
    <>
      <div className='flex items-center space-x-5'>
        <BackLink to={BackLinkHref}>Posts</BackLink>
        <p className='flex items-center justify-center px-3 py-2 w-20 h-11 text-sm text-[var(--color-text)] text-center uppercase bg-[var(--button-color-active)] rounded-lg shadow-xl'>
          #{tag}
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
      {posts?.length !== 0 && (
        <section>
          <Pagination
            setSearchParams={setSearchParams}
            totalPages={totalPages}
            currentPage={currentPage - 1}
          />
        </section>
      )}
    </>
  );
};

export default PostsByTagPage;
