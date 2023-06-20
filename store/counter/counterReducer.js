import { DECREMENT, INCREMENT, SETSTEP } from './types';
import { counterInitialState } from './initialState';

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        total: state.total + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        //   or
        //total: state.total - state.step,
        total: state.total - action.payload,
      };
    case SETSTEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
