import { todoInitialState } from './initialState';
import { ADDTASK, DELETETASK, TOGGLECOMPLETED } from './types';

export const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return [...state, action.payload];
    case DELETETASK:
      return state.filter((task) => task.id !== action.payload);
    case TOGGLECOMPLETED:
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};
