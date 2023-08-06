import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllPosts,
  getAllTags,
  getComments,
  getDetailsPost,
  getPostByQuery,
  getPostsByTag,
  getPostsByUser,
  addComment,
} from './thunks';

const initialState = {
  items: [],
  postDetails: null,
  popularPosts: [],
  tags: [],
  comments: [],
  currentPage: 1,
  totalPages: 0,
  limit: null,
  isLoading: false,
  error: null,
};

const customArrThunks = [
  getAllPosts,
  getDetailsPost,
  getAllTags,
  getPostsByTag,
  getPostByQuery,
  getPostsByUser,
  getComments,
  addComment,
];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = (status) => customArrThunks.map((el) => el[status]);

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload.posts;
  state.popularPosts = payload.popularPosts;
  state.currentPage = payload.currentPage;
  state.totalPages = payload.totalPages;
};

const handleFulfilledDetails = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.postDetails = payload;
};
const handleFulfilledTags = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.tags = payload;
};

const handleFulfilledComments = (state, { payload }) => {
  // console.log('PAYLOAD', payload);
  state.isLoading = false;
  state.error = null;
  state.comments = payload;
};

const handleFulfilledComment = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.comments.push(payload);
  //state.comments = [...state.comments, ...payload];
};

const handleFulfilledUsersPosts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload.posts;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllPosts.fulfilled, handleFulfilled)
      .addCase(getDetailsPost.fulfilled, handleFulfilledDetails)
      .addCase(getAllTags.fulfilled, handleFulfilledTags)
      .addCase(getPostsByTag.fulfilled, handleFulfilled)
      .addCase(getPostByQuery.fulfilled, handleFulfilled)
      .addCase(getPostsByUser.fulfilled, handleFulfilledUsersPosts)
      .addCase(getComments.fulfilled, handleFulfilledComments)
      .addCase(addComment.fulfilled, handleFulfilledComment)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

export const postReducer = postSlice.reducer;
