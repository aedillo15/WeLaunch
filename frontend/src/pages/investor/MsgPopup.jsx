import { Button, Input, VStack, HStack, Container, Box, Flex } from '@chakra-ui/react'
import React from 'react'

const MsgPopup = () =>{


    return(
        <VStack minH="50vh">
     
                <VStack minH="45vh" bg="white">
                </VStack>
                <Flex bg="#77777744" width="100%">
                    <HStack pt="1em" width="100%" p={5}>
                        <Input bg="white" />      
                        <Button bg="blue.400" color="white" w="5em">Send</Button>
                    </HStack> 
                </Flex>
        </VStack>
    )
}

export default MsgPopup;