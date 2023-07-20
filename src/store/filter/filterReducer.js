import { filtersInitialState } from './initialState';
import { setStatusFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case SET_STATUS_FILTER:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
