import { todoInitialState } from './initialState';
import { addTask, deleteTask, toggleCompleted } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const todoReducer = createReducer(todoInitialState, {
  [addTask]: (state, action) => [...state, action.payload],
  [deleteTask]: (state, action) => state.filter((todo) => todo.id !== action.payload),
  // [deleteTask]: (state, action) => {
  // const index = state.findIndex(task => task.id === action.payload);
  //   state.splice(index, 1)
  // },

  [toggleCompleted]: (state, action) =>
    state.map((todo) =>
      todo.id !== action.payload ? todo : { ...todo, completed: !todo.completed }
    ),
});

// export const todoReducer = (state = todoInitialState, action) => {
//   switch (action.type) {
//     case ADDTASK:
//       return [...state, action.payload];
//     case DELETETASK:
//       return state.filter((task) => task.id !== action.payload);
//     case TOGGLECOMPLETED:
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };
