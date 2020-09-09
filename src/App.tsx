import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/globalStyles';
import AuthProvider from './contexts';

function App() {
  return (
      <>  
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyle />
      </>
  );
}

export default App;
