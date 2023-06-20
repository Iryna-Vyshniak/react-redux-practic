import { nanoid } from 'nanoid';
import { ADDTASK, DELETETASK, TOGGLECOMPLETED } from './types';

export const addTask = (text) => {
  return {
    type: ADDTASK,
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETETASK,
    payload: taskId,
  };
};

export const toggleCompleted = (taskId) => {
  return {
    type: TOGGLECOMPLETED,
    payload: taskId,
  };
};
