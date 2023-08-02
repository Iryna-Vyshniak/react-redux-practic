import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getProfileThunk,
  loginThunk,
  logOutThunk,
  updateUserDataThunk,
  getAllUsersThunk,
} from './thunk';

const initialState = {
  users: [],
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

/* const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
}) */

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.user = payload.user;
  state.token = payload.token;
  state.isLogin = true;
};

const handleFulfilledUsers = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.users = payload;
};

const handleFulfilledUpdate = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.user = payload.user;
};

// const handleFulfilledProfile = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   state.user = payload.user;
// };

const handleFulfilledLogout = (state) => {
  state.isLoading = false;
  state.error = null;
  state.user = {};
  state.token = '';
  state.isLogin = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleRejectedProfile = (state, { payload }) => {
  state.isLoading = false;
  state.token = '';
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilled)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogout)
      .addCase(updateUserDataThunk.fulfilled, handleFulfilledUpdate)
      .addCase(getAllUsersThunk.fulfilled, handleFulfilledUsers)
      .addCase(getProfileThunk.rejected, handleRejectedProfile)
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getProfileThunk.pending,
          logOutThunk.pending,
          updateUserDataThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, logOutThunk.rejected, updateUserDataThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
