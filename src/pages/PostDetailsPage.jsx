import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import { getAuth, getUser, selectIsPostLiked } from '../store/auth/selectors';
import { Link, useLocation, useParams } from 'react-router-dom';
import { selectComments, selectIsLoading, selectPostDetails } from '../store/posts/selectors';
import { getComments, getDetailsPost, setLikedPost } from '../store/posts/thunks';
import { BackLink } from '../components/BackLink';
import { LikeButton } from '../components/LikeButton';
import { getProfileThunk } from '../store/auth/thunk';
import { CommentsPost } from '../components/Posts/CommentsPost';

const PostDetailsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const { isLogin } = useSelector(getAuth);
  const user = useSelector(getUser);
  const comments = useSelector(selectComments);
  const post = useSelector(selectPostDetails);

  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const BackLinkHref = location.state?.from ?? '/posts';
  const count = post?.likedBy.length;

  const isPostLiked = useSelector(selectIsPostLiked(id));

  const [countLikes, setCountLikes] = useState(count);
  const [isVote, setIsVote] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [loadedComments, setLoadedComments] = useState(false);

  useEffect(() => {
    dispatch(getProfileThunk());
    dispatch(getDetailsPost(id));
    dispatch(getComments(id));
  }, [dispatch, id]);

  const handleShowComments = async () => {
    if (!loadedComments) {
      setLoadedComments(true);
    }
    setShowComments(!showComments);
  };

  const handleToggleLike = async () => {
    await dispatch(setLikedPost(id));

    setIsVote((prevIsVote) => !prevIsVote);

    setCountLikes((prevCount) => (!isVote ? prevCount + 1 : prevCount - 1));
  };

  useEffect(() => {
    if (count !== undefined) {
      setCountLikes(count);
    } else {
      setCountLikes(0);
    }
  }, [count]);

  useEffect(() => {
    setIsVote(isPostLiked);
  }, [isPostLiked]);

  // console.log('COUNT', count);
  // console.log('USER', user);
  // console.log('IS POST LIKED', isPostLiked);

  // console.log(countLikes);
  // console.log('isVote', isVote);

  return (
    <section className='flex flex-col gap-5 py-3'>
      <div className='px-4'>
        <BackLink to={BackLinkHref}>Posts</BackLink>
      </div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && post && (
        <div className='px-4'>
          {post.imageUrl && (
            <div className='mb-5 flex h-[15rem] md:h-[25rem] rounded-md'>
              <img
                src={post.imageUrl}
                alt={post.title}
                className='w-full object-cover rounded-t-lg'
                loading='lazy'
              />
            </div>
          )}
          <div className='flex justify-between items-center mb-5'>
            <div className='flex items-center space-x-1'>
              {post.owner.avatarUrl && (
                <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-slate-80 shadow-lg'>
                  <img
                    src={post.owner.avatarUrl}
                    alt='avatar'
                    className='w-[24px] h-[24px] rounded-full object-cover object-center'
                  />
                </div>
              )}
              <span className='text-xs text-[var(--color-text)] opacity-50'>{post.owner.name}</span>
            </div>

            <span className='text-xs text-[var(--color-text)]  opacity-50'>
              {post.createdAt.split('T')[0]}
            </span>
          </div>
          <ul className='mb-5 text-xs text-[var(--color-text)]  opacity-50'>
            {post.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
          <div className='mb-5'>
            <h2 className='mb-1 text-lg text-[var(--color-text)] '>{post.title}</h2>

            <p className='text-xs text-[var(--color-text)]  opacity-80'>{post.text}</p>
          </div>
          <div className='flex gap-3 items-center justify-between mb-5'>
            <div className='flex gap-3'>
              {isLogin && (
                <>
                  <LikeButton isPostLiked={isVote} handleToggleLike={handleToggleLike} />

                  <span className='text-sm text-[var(--color-text)]  opacity-50'>{countLikes}</span>
                </>
              )}
              <button
                type='button'
                className='flex items-center justify-center gap-2 text-sm text-[var(--color-text)]  opacity-50'
              >
                <AiFillEye /> <span>{post.viewsCount}</span>
              </button>
              <button
                type='button'
                onClick={handleShowComments}
                className='flex items-center justify-center gap-2 text-sm text-[var(--color-text)]  opacity-50'
              >
                <AiOutlineMessage /> <span>{comments?.length || 0}</span>
              </button>
            </div>

            {isLogin && post?.owner?._id === user._id && (
              <div className='flex gap-3'>
                <Link
                  to={`/posts`}
                  className='flex items-center justify-center gap-2 text-lg text-[var(--color-text)]  opacity-50'
                >
                  <AiTwotoneEdit />
                </Link>
                <button
                  type='button'
                  className='flex items-center  text-lg justify-center gap-2 text-stone-950 opacity-50'
                >
                  <AiTwotoneDelete />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {showComments && <CommentsPost />}
    </section>
  );
};

export default PostDetailsPage;
