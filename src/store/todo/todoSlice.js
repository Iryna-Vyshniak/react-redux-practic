import { todoInitialState } from './initialState';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: todoInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            text,
          },
        };
      },
    },
    deleteTask: {
      reducer(state, action) {
        const index = state.findIndex((todo) => todo.id === action.payload);
        state.splice(index, 1);
        // state.filter((todo) => todo.id !== action.payload),
      },
    },
    toggleCompleted(state, action) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    // toggleCompleted(state, action) {
    //   for (const todo of state) {
    //     if (todo.id === action.payload) {
    //       todo.completed = !todo.completed;
    //       break;
    //     }
    //   }
    // },
  },
});

export const { addTask, deleteTask, toggleCompleted } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
