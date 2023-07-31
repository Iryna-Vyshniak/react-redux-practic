export const selectIsLoading = (state) => state.posts.isLoading;
export const selectError = (state) => state.posts.error;

export const selectPosts = (state) => state.posts.items;
export const selectPostDetails = (state) => state.posts.postDetails;
export const selectPopularPosts = (state) => state.posts.popularPosts;

export const selectCurrentPage = (state) => state.posts.currentPage;
export const selectTotalPages = (state) => state.posts.totalPages;
export const selectLimit = (state) => state.posts.limit;
