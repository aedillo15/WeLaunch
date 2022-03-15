import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link } from '@chakra-ui/react'


export const Signup = () => {

    const [show, setShow] = useState(false)

    return(  
        <Box w='100%' h='100%' bgGradient='linear(to-br, #4D748C, #1B3059)' >
            <Container maxW='container.sm' h="100%">
                <VStack h="100%" justifyContent="center" alignItems="center">
                    <VStack spacing={3} w="50%" justifyContent="center" alignItems="center">
                        <Text fontSize={35} color="#FFFFFF33">Sign up</Text>
                        <Input bg="#FFFFFF10" color="white" variant='filled' placeholder='Name' _hover={{ bg: '#FFFFFF33',  }}  focusBorderColor='#76D3E099' />
                        <Input bg="#FFFFFF10" color="white" variant='filled' placeholder='Email' _hover={{ bg: '#FFFFFF33',  }}  focusBorderColor='#76D3E099' />
                        <Input bg="#FFFFFF10" color="white" variant='filled' placeholder='Password' _hover={{ bg: '#FFFFFF33',  }} focusBorderColor='#76D3E099' type={show ? 'text' : 'password'} />
                        <Input bg="#FFFFFF10" color="white" variant='filled' placeholder='Confirm Password' _hover={{ bg: '#FFFFFF33',  }} focusBorderColor='#76D3E099' type={show ? 'text' : 'password'} />
                        <Button bg="#F28907" color="white"  _hover={{ bg: '#F2AF00' }} w="100%" >Sign up</Button>
                        <HStack alignItems="start" w="100%">
                           <Text fontSize={12} color="#FFFFFF88">Alreadyt have an account?</Text> 
                           <Link fontSize={12} color="#F28907" href="login" >Login</Link>
                        </HStack>
                    </VStack>        
                </VStack>
            </Container>            
        </Box>
    )
}
