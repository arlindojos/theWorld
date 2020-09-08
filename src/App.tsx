import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/globalStyles';
import store from './store';

function App() {
  return (
      <>
        <Provider store={store}>
          <Routes />
        </Provider>
        <GlobalStyle />
      </>
  );
}

export default App;
