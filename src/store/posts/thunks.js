import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../share/api/posts-service';

export const getAllPosts = createAsyncThunk('posts/getAll', async (page, { rejectWithValue }) => {
  try {
    const data = await api.getPosts(page);
    // console.log('POSTS', data);
    return data;
  } catch ({ response }) {
    return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
  }
});
