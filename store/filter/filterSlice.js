import { createSlice } from '@reduxjs/toolkit';
import { filtersInitialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: {
      reducer(state, action) {
        state.status = action.payload;
      },
    },
  },
});

export const filtersReducer = filterSlice.reducer;
export const { setStatusFilter } = filterSlice.actions;
