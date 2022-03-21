import React from 'react';

import { ChakraProvider, Text,extendTheme } from '@chakra-ui/react'

import Theme from "./theme/Theme"
import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
       <ChakraProvider theme={Theme}>
        <AnimatePresence exitBeforeEnter>
          <Routes />
        </AnimatePresence>
      </ChakraProvider>
    </BrowserRouter>
   
  );
}

export default App;