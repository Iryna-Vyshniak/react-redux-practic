import { combineReducers } from 'redux';
import { counterReducer } from './counter/counterReducer';
import { todoReducer } from './todo/todoReducer';
import { filtersReducer } from './filter/filterReducer';

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  filters: filtersReducer,
});

// or
// export const reducer = {
//   counter: counterReducer,
//   todo: todoReducer,
//   filters: filtersReducer,
// };

// const counterReducer = (state = initialState.counter, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         total: state.total + action.payload,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//            or
//         total: state.total - state.step,
//            or
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

// const todoReducer = (state = initialState.todo, action) => {
//   switch (action.type) {
//     case 'todo':
//       return {
//         ...state,
//         todo: state.todo + action.payload,
//       };
//     default:
//       return state;
//   }
// };
