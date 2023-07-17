import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { reducer } from './reducer';
// import { reducer as rootReducer } from './reducer';

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// export const store = configureStore({ reducer: reducer})
// export const store = configureStore({ reducer: rootReducer})

export const persistor = persistStore(store);

// pure redux

// import { createStore } from 'redux';
// import { reducer } from './reducer';

// export const store = createStore(reducer);
