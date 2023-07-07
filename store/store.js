import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
// import { reducer as rootReducer } from './reducer';

export const store = configureStore({ reducer });
// export const store = configureStore({ reducer: reducer})
// export const store = configureStore({ reducer: rootReducer})

// pure redux

// import { createStore } from 'redux';
// import { reducer } from './reducer';

// export const store = createStore(reducer);
