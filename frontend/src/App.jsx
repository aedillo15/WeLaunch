import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Providers from './context';
import Routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Providers>
           <Routes />
      </Providers>
    </BrowserRouter>
   
  );
}

export default App;