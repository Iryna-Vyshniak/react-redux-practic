import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, signIn, logOut } from '../../share/api/auth-service';

export const loginThunk = createAsyncThunk('auth/signin', async (data, { rejectWithValue }) => {
  try {
    const result = await signIn(data);
    //console.log('RESULT', result);
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
      // console.log(auth.token);
      const result = await getProfile(auth.token);
      //console.log('PROFILE', result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { rejectWithValue, getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        // return false;
        return rejectWithValue('Unable to fetch user');
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

// export const getProfileThunk = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const persistedAccessToken = state.auth.token;
//     if (!persistedAccessToken) {
//       return rejectWithValue('Unable to fetch user');
//     }
//     setToken(persistedAccessToken);
//     try {
//       const result = await getProfile();
//       console.log('PROFILE', result);
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(response.data.message);
//     }
//   }
// );
