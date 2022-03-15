import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link,InputGroup,InputRightElement } from '@chakra-ui/react'


export const Login = ()=>{

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return(  
        <Box w='100%' h='100%' bgGradient='linear(to-br, #4D748C, #1B3059)' >
            <Container maxW='container.sm' h="100%">
                <VStack h="100%" justifyContent="center" alignItems="center">
                    <VStack spacing={3} w="50%" justifyContent="center" alignItems="center">
                        <Text fontSize={35} color="#FFFFFF33">Login</Text>
                        <Input bg="#FFFFFF10" color="white" variant='filled' placeholder='Email'  _hover={{ bg: '#FFFFFF33',  }} focusBorderColor='#76D3E099' />
                        <InputGroup size='md'>
                            <Input bg="#FFFFFF10" color="white" variant='filled' placeholder='Password' _hover={{ bg: '#FFFFFF33',  }} focusBorderColor='#76D3E099' type={show ? 'text' : 'password'} />
                            {/* <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement> */}
                        </InputGroup>
                        <Button bg="#F28907" color="white" w="100%"   _hover={{ bg: '#F2AF00' }}>LOGIN</Button>
                        <HStack alignItems="start" w="100%">
                           <Text fontSize={12} color="#FFFFFF88">Don't have an account?</Text> 
                           <Link fontSize={12} color="#F28907" href="signup" >Signup</Link>
                        </HStack>
                    </VStack>        
                </VStack>
            </Container>            
        </Box>
    )
}
