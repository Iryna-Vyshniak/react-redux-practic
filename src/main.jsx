import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import { persistor, store } from '../store/store.js';
import AuthLayout from './components/Layout/AuthLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
