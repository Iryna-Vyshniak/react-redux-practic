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

export const getDetailsPost = createAsyncThunk(
  'posts/getDetails',
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.getDetailsPost(id);
      // console.log('POSTS ID', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const getAllTags = createAsyncThunk('posts/tags', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.getAllTags();
    // console.log('TAGS', data);
    return data;
  } catch ({ response }) {
    return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
  }
});

export const getPostsByTag = createAsyncThunk(
  'posts/tag',
  async ({ tag, page }, { rejectWithValue }) => {
    try {
      const data = await api.getPostsByTags(tag, page);
      console.log('TAGS', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
