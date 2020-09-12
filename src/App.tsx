import React, { useContext } from 'react';
import Routes from './routes';

import GlobalStyle from './styles/globalStyles';
import { AuthContext } from './contexts';

function App() {
  const { blackMode } = useContext(AuthContext);
  return (
      <>  
        <Routes />
        <GlobalStyle isBlackMode={blackMode} />
      </>
  );
}

export default App;
