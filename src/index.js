import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import contactStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from './theme';
import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
     <Provider store={contactStore.store}>
        <PersistGate loading={null} persistor={contactStore.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);