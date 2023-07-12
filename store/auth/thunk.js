import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, signIn, logOut } from '../../share/api/auth-service';

export const loginThunk = createAsyncThunk('auth/signin', async (data, { rejectWithValue }) => {
  try {
    const result = await signIn(data);
    return result;
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});

export const getProfileThunk = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await getProfile(auth.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logOutThunk = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const result = await logOut();
    return result;
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});
