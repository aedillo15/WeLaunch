import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"
import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
       <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Routes />
        </AnimatePresence>
      </ChakraProvider>
    </BrowserRouter>
   
  );
}

export default App;