import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  // selectError,
  selectIsLoading,
  selectPosts,
  selectTotalPages,
} from '../store/posts/selectors';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllPosts } from '../store/posts/thunks';
import { Pagination } from '../components/Pagination';
import { PostsList } from '../components/Posts/PostsList';

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const [searchParams, setSearchParams] = useSearchParams({ name: '', page: 1 });

  const page = Number(searchParams.get('page') || 1);

  useEffect(() => {
    dispatch(getAllPosts({ page }));
  }, [dispatch, page]);

  return (
    <>
      <section className='flex flex-col items-center justify-between p-5 min-h-[85vh]'>
        <div></div>
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

export default PostsPage;
