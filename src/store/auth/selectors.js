export const isUserLogin = ({ auth }) => auth.isLogin;

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const getUser = ({ auth }) => auth.user;
export const getUsers = ({ auth }) => auth.users;

export const selectFavoritesPosts = (state) => state.auth.favorites;

export const selectIsPostLiked = (postId) => (state) => {
  return state.auth.user.favorites.includes(postId);
};
