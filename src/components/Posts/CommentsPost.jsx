import { useDispatch, useSelector } from 'react-redux';
import { getAuth, getUser } from '../../store/auth/selectors';
import { useState, useRef } from 'react';
import { selectComments } from '../../store/posts/selectors';
import { addComment, getComments } from '../../store/posts/thunks';
import { useParams } from 'react-router-dom';

export const CommentsPost = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(getAuth);
  // const user = useSelector(getUser);
  const { id } = useParams();
  const initialComments = useSelector(selectComments);
  const [comment, setComment] = useState('');
  // const [comments, setComments] = useState(initialComments);
  const [isAddingComment, setIsAddingComment] = useState(false);

  // const commentsRef = useRef();

  const handleSubmit = async () => {
    setComment('');
    setIsAddingComment(true);
    try {
      await dispatch(addComment({ id, value: comment }));
      await dispatch(getComments(id));
      setIsAddingComment(false);
    } catch (error) {
      setIsAddingComment(false);
    }
  };
  // const handleSubmit = async () => {
  //   const newComment = { text: comment, owner: user };
  //   setComment('');
  //   setIsAddingComment(true);
  //   try {
  //     await dispatch(addComment({ id, value: comment }));
  //     await dispatch(getComments(id));
  //     setComments([...comments, newComment]);
  //     setIsAddingComment(false);
  //   } catch (error) {
  //     setIsAddingComment(false);
  //     setComments(initialComments);
  //   }

  //   /*  commentsRef.current.scrollIntoView({ behavior: 'smooth' }); */
  // };

  const handleClear = async () => {
    setComment('');
  };

  //console.log('COMMENTS in POST', comments);
  // console.log('INIT COMMENTS', initialComments);

  return (
    <>
      {isLogin && (
        <>
          {isAddingComment && <div>Loading...</div>}
          {initialComments.length > 0 && (
            <div>
              <ul className='w-full md:w-[450px] flex flex-col gap-3 px-4'>
                {initialComments?.map(({ text, owner }, idx) => (
                  <li key={idx}>
                    <div className='flex items-center space-x-1'>
                      {owner && owner.avatarUrl && (
                        <div className='flex items-center justify-center w-[22px] h-[22px] rounded-full border border-slate-80 shadow-lg'>
                          <img
                            src={owner.avatarUrl}
                            alt='avatar'
                            className='w-[20px] h-[20px] rounded-full object-cover object-center'
                          />
                        </div>
                      )}
                      <span className='text-xs text-[var(--color-text)] opacity-50'>
                        {owner?.name}
                      </span>
                    </div>

                    <p className='ml-[26px] text-xs text-[var(--color-text)] opacity-50>'>{text}</p>
                  </li>
                ))}
              </ul>
              {/* <div ref={commentsRef} /> */}
            </div>
          )}

          <div className='w-full md:w-[450px] flex flex-col gap-3 px-4'>
            <div>
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
                  type='submit'
                  disabled={!comment.length}
                  onClick={handleClear}
                  className='px-3 py-2 text-sm font-medium text-center  text-gray-900 hover:text-white bg-[#ffd8e3] rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 shadow-xl hover:shadow-md'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
