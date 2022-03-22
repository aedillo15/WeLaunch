import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import { HStack, Box } from "@chakra-ui/react"

const Layout = (props) =>{
    return(
        <Box w="100%" h="100%" bgGradient='linear(to-br, #4D748C, #1B3059)'>
            <Header>
                <HStack>
                    {props.headerLinks}
                </HStack>
             </Header>

            {props.children}
        
            <Footer />
        </Box>
    )
}

export default Layout;