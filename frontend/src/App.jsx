import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"

import { Text } from '@chakra-ui/react'

import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </BrowserRouter>
   
  );
}

export default App;