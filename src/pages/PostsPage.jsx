import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  // selectError,
  selectIsLoading,
  selectPosts,
  selectTags,
  selectTotalPages,
} from '../store/posts/selectors';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllPosts, getPostByQuery } from '../store/posts/thunks';
import { Pagination } from '../components/Pagination';
import { PostsList } from '../components/Posts/PostsList';
import { TagsBlock } from '../components/Posts/TagsBlock';
import { SearchBox } from '../components/SearchBox';
import { BackLink } from '../components/BackLink';
import { PopularPosts } from '../components/Posts/PopularPosts';
import { PopularUsers } from '../components/Posts/PopularUsers';
import { getAuth } from '../store/auth/selectors';

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const { isLogin } = useSelector(getAuth);
  // const error = useSelector(selectError);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1, name: '' });
  const BackLinkHref = location.state?.from ?? '/posts';

  const page = Number(searchParams.get('page') || 1);
  let name = searchParams.get('name') ?? '';

  const tags = useSelector(selectTags);

  useEffect(() => {
    name !== '' ? dispatch(getPostByQuery(name)) : dispatch(getAllPosts(page));
  }, [dispatch, page, name]);

  const handleSearchChange = ({ target }) => {
    const inputValue = target.value;
    name = inputValue;
    setSearchParams({ page, name });
  };

  return (
    <>
      <div className='block md:flex md:justify-between'>
        {tags.length > 0 && posts?.length > 0 && (
          <section className='flex flex-col items-center justify-start space-y-5 p-5 md:w-1/5'>
            <div>
              <h2 className='hidden md:block mb-2 text-lg font-bold tracking-tight text-[var(--color-text)] text-center'>
                Category
              </h2>
              <TagsBlock />
            </div>
            <div>
              <h2 className='mb-2 text-lg font-bold tracking-tight text-[var(--color-text)] text-center'>
                Popular
              </h2>
              <PopularPosts />
            </div>
            {isLogin && (
              <div>
                <h2 className='mb-2 text-lg font-bold tracking-tight text-[var(--color-text)] text-center'>
                  Popular Author
                </h2>
                <PopularUsers />
              </div>
            )}
          </section>
        )}

        <section className='flex flex-col flex-grow items-center justify-between p-5'>
          {isLoading ? (
            <div className='text-[var(--color-text)]'>... Loading</div>
          ) : posts?.length > 0 ? (
            <div className='flex flex-col items-center juctify-between gap-6 md:basis-4/5'>
              <SearchBox value={name} onChange={handleSearchChange} />
              <PostsList />
            </div>
          ) : (
            <>
              <div className='mb-5 px-4'>
                <BackLink to={BackLinkHref}>Posts</BackLink>
              </div>
              <h2 className='m-auto'>Posts not found...</h2>
            </>
          )}
        </section>
      </div>
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
