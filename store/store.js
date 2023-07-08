import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { reducer } from './reducer';
// import { reducer as rootReducer } from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
// export const store = configureStore({ reducer: reducer})
// export const store = configureStore({ reducer: rootReducer})

export const persistor = persistStore(store);

// pure redux

// import { createStore } from 'redux';
// import { reducer } from './reducer';

// export const store = createStore(reducer);
