import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, setStep } from './actions';
import { counterInitialState } from './initialState';

//  another variant - use createSlice witout actions and createReducrer

export const counterReducer = createReducer(counterInitialState, {
  // [increment] => викликаємо функцію в [], без [] - ключ-назва
  [increment]: (state, action) => ({
    ...state,
    total: state.total + action.payload,
  }),
  [decrement]: (state, action) => ({
    ...state,
    total: state.total - action.payload,
  }),
  [setStep]: (state, action) => ({
    ...state,
    step: action.payload,
  }),
});

// export const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         total: state.total + action.payload,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         //   or
//         //total: state.total - state.step,
//         total: state.total - action.payload,
//       };
//     case SETSTEP:
//       return {
//         ...state,
//         step: action.payload,
//       };
//     default:
//       return state;
//   }
// };
