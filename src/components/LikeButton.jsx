import { BsHeartFill, BsHeart } from 'react-icons/bs';

export const LikeButton = ({ isPostLiked, handleToggleLike }) => {
  return (
    <button
      type='button'
      onClick={handleToggleLike}
      className='border-none outline-none bg-transparent'
    >
      {isPostLiked ? <BsHeartFill className='text-red-600' /> : <BsHeart />}
    </button>
  );
};
