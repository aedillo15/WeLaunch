import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"

import { Text } from '@chakra-ui/react'

import Routes from './routes/routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>Hello WeLaunch</Text>
      <Routes />
    </ChakraProvider>
  );
}

export default App;