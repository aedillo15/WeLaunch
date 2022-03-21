import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink,InputGroup,InputRightElement } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
import Menu from "./CommonMenu"

export const Login = ()=>{

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return(  
        <Layout headerLinks={<Menu />} >
            <AnimatedPage>
                <Box w='100%'>
                    <Container maxW='container.sm' h="90vh">
                        <VStack h="100%" justifyContent="center" alignItems="center">
                            <VStack spacing={3} w="50%" justifyContent="center" alignItems="center">
                                <Text fontSize={35} color="brand.lightText">Login</Text>
                                <Input bg="brand.glass" color="white" variant='filled' placeholder='Email'  _hover={{ bg: '#FFFFFF33',  }} focusBorderColor='#76D3E099' />
                                <InputGroup size='md'>
                                    <Input bg="brand.glass" color="white" _hover={{ bg: '#FFFFFF33',  }} focusBorderColor='#76D3E099' variant='filled' placeholder='Password' type={show ? 'text' : 'password'} />
                                    {/* <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement> */}
                                </InputGroup>
                                <Button variant="primary" w="100%">LOGIN</Button>
                                <HStack alignItems="start" w="100%">
                                <Text fontSize={12} color="#FFFFFF88">Don't have an account?</Text> 
                                <UILink as={Link} fontSize={12} color="#F28907" to="/signup" >Signup</UILink>
                                </HStack>
                            </VStack>        
                        </VStack>
                    </Container>            
                </Box>
            </AnimatedPage>    
        </Layout>
    
    )
}
