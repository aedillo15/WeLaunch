import React from 'react';

import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"

import { Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>Hello World</Text>
    </ChakraProvider>
    
  );
}

export default App;
