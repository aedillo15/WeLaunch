import React from "react"
import AuthProvider from "./AuthContext"
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion';
import Theme from "../theme/theme"


const Providers = ({children}) =>{
    return(
        <ChakraProvider theme={Theme}>
            <AnimatePresence exitBeforeEnter>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </AnimatePresence>
        </ChakraProvider>
    )
}
export default Providers;