import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('ADDTASK', (text) => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});

export const deleteTask = createAction('DELETETASK');
// export const deleteTask = createAction('DELETETASK', taskId => {
//   return {
//     payload: taskId,
//   }
// }
// );

export const toggleCompleted = createAction('TOGGLECOMPLETED');
// export const toggleCompleted = createAction('TOGGLECOMPLETED', (taskId) => {
//   return {
//     payload: taskId,
//   }
// }
// )

//  pure redux

// export const addTask = (text) => {
//   return {
//     type: ADDTASK,
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: DELETETASK,
//     payload: taskId,
//   };
// };

// export const toggleCompleted = (taskId) => {
//   return {
//     type: TOGGLECOMPLETED,
//     payload: taskId,
//   };
// };
