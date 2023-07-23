import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addProductThunk, getAllProductsThunk, getProductByIdThunk } from './thunks';

const initialState = {
  items: [],
  productDetails: null,
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
  error: null,
};

const customArrThunks = [addProductThunk, getAllProductsThunk, getProductByIdThunk];

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

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload.products;
  state.currentPage = action.payload.currentPage;
  state.totalPages = action.payload.totalPages;
};

const handleFulfilledAdd = (state, { payload }) => {
  console.log('PAYLOAD', payload);
  // return {
  //   ...state,
  //   isLoading: true,
  //   error: null,
  //   items: [...state.items, payload],
  // };
  state.isLoading = true;
  state.error = null;
  state.items.push(payload);
};

const handleFulfilledbyId = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.productDetails = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    const { pending, rejected } = status;
    builder
      .addCase(getAllProductsThunk.fulfilled, handleFulfilled)
      .addCase(addProductThunk.fulfilled, handleFulfilledAdd)
      .addCase(getProductByIdThunk.fulfilled, handleFulfilledbyId)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

export const productsReducer = productsSlice.reducer;
