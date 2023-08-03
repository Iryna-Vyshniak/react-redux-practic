import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTags } from '../../store/posts/selectors';

export const TagsBlock = () => {
  const tags = useSelector(selectTags);

  return (
    <>
      {tags?.length > 0 && (
        <ul className='flex flex-wrap items-center justify-center space-x-2 md:flex-col md:space-x-0 w-full'>
          {tags?.map((tag) => (
            <li key={tag} className='mb-3 w-[120px]'>
              <Link
                to={`/tags/${tag}`}
                className='flex items-center justify-center px-3 py-2 text-sm text-[var(--color-text)] text-center uppercase bg-[var(--button-color-active)] rounded-lg hover:bg-[var(--buttonHover)] focus:ring-2 focus:outline-none focus:ring-green-300 shadow-xl hover:shadow-md'
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
