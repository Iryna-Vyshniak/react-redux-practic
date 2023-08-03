import { useSelector } from 'react-redux';
import { selectPopularPosts } from '../../store/posts/selectors';
import { Link } from 'react-router-dom';

export const PopularPosts = () => {
  const popularPosts = useSelector(selectPopularPosts);
  // console.log(popularPosts);

  const lastPopularPosts = popularPosts?.slice(0, 3);

  const shortenedTitles = (obj) => {
    if (obj.title.length > 30) {
      return obj.title.substring(0, 30) + '...';
    } else {
      return obj.title;
    }
  };

  return (
    <>
      {lastPopularPosts?.length > 0 && (
        <ul className='flex flex-wrap items-center justify-center space-x-2 md:flex-col md:space-x-0 w-full'>
          {lastPopularPosts?.map((post) => (
            <li key={post._id} className='mb-3 w-[120px]'>
              <Link
                to={{
                  pathname: `/posts/${post._id}`,
                  state: { from: location },
                }}
                className='flex flex-col items-center justify-center text-xs text-[var(--color-text)] text-center bg-[var(--button-color-active)] rounded-lg hover:bg-[var(--buttonHover)] focus:ring-2 focus:outline-none focus:ring-green-300 shadow-xl hover:shadow-md'
              >
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className='w-full h-[5rem] object-cover rounded-t-lg'
                    loading='lazy'
                  />
                )}
                <div className='p-2'> {shortenedTitles(post)}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
