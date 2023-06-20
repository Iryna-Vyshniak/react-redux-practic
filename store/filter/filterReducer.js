import { filtersInitialState } from './initialState';
import { SET_STATUS_FILTER } from './types';

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case SET_STATUS_FILTER:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
