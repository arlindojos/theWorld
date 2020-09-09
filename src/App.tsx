import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/globalStyles';
import { store, persistor } from './store';

function App() {
  return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
        <GlobalStyle />
      </>
  );
}

export default App;
