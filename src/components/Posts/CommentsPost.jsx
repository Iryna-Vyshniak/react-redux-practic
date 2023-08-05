import { useSelector } from 'react-redux';
import { getAuth } from '../../store/auth/selectors';
import { useState, useRef } from 'react';

export const CommentsPost = () => {
  const { isLogin } = useSelector(getAuth);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([1, 2, 3, 4]);

  const commentsRef = useRef();

  const handleSubmit = async () => {
    setComment('');
    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClear = async () => {
    setComment('');
  };

  return (
    <>
      {isLogin && (
        <>
          <div className='w-full md:w-[450px] flex flex-col gap-3 px-4'>
            {comments?.map((comment, idx) => (
              <p key={idx}>
                <strong>{comment}</strong>
              </p>
            ))}
          </div>
          <div ref={commentsRef} />
          <div className='w-full md:w-[450px] flex flex-col gap-3 px-4'>
            <form>
              <textarea
                value={comment}
                onChange={({ target }) => setComment(target.value)}
                type='text'
                rows={10}
                aria-multiline
                placeholder='Write comment...'
                className='mb-2 p-3 w-full h-[120px] caret-green-50 focus:caret-red-500 text-xs text-[var(--color-text)] bg-[var(--backgroundCard)] resize-y shadow-lg rounded-lg'
              />
              <div className='flex flex-row gap-3'>
                <button
                  type='submit'
                  disabled={!comment.length}
                  onClick={handleSubmit}
                  className='px-3 py-2 text-sm font-medium text-center  text-gray-900 hover:text-white bg-[#d1ffdf] rounded-lg hover:bg-lime-700 focus:ring-2 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-xl hover:shadow-md'
                >
                  Add
                </button>
                <button
                  type='click'
                  disabled={!comment.length}
                  onClick={handleClear}
                  className='px-3 py-2 text-sm font-medium text-center  text-gray-900 hover:text-white bg-[#ffd8e3] rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 shadow-xl hover:shadow-md'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};
