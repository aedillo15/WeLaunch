import React from "react"
import { Button, HStack,Input, Flex, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react"

import {FaSearch} from "react-icons/fa"

const SearchBar = ({children}) =>{

    return(
        <Flex bg="brand.glass" minWidth="100%" alignItems="center" justifyContent="start" boxShadow='dark-lg' borderRadius={5} h="6vh" p={5}>
            <HStack>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Icon as={FaSearch} color='gray.300' />}
                    />
                    <Input w="20vw" bg="brand.glass" color="white" _hover={{ bg: '#FFFFFF33',  }} focusBorderColor='#76D3E099' variant='filled' placeholder='Search' mr={2}/>
                </InputGroup>
                
            </HStack>

            <Button variant="secondary" mr={50}>Search</Button>
       
            {children}

        </Flex>
    )
}

export default SearchBar;