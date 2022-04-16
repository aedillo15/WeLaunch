import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout";
import Menu from "../common/CommonMenu"





const MainMenu = (props) => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    return(
        <Layout>
            <AnimatedPage> 
                <Box w='100%' h='100%' bgGradient='linear(to-br, #4D748C, #1B3059)' >
                    <Container maxW='container.xxl' h="90vh">
                        
                        <VStack justifyContent="left" alignItems="toleftp">
                            <HStack>
                            <VStack spacing={3} w="25%" h="100%" justifyContent="center" alignItems="center">
                                <Text align="center" fontSize={35} color="#FFFFFF33">The Actual Business</Text>

                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" onClick={()=>navigate('../welcome')}>Welcome</Button>
                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" onClick={()=>navigate('../incorporate')}>Incorporate</Button>
                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" onClick={()=>navigate('../product')}>Product</Button>
                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" onClick={()=>navigate('../cashflow')}>Cash Flow</Button>
                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" >Sale Method</Button>
                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" >More</Button>
                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" >Buttons</Button>
                                <Button bg="#AAC1E6" color="darkblue"  _hover={{ bg: '#89a1c7' }} w="100%" >Here</Button>

                            </VStack>   
                            <Box h="30%" w="80%" pl="20">
                                <VStack>

                                    {props.children}
                                </VStack>
                            </Box>
                            </HStack>
                            
                        </VStack>
                        
                    </Container>            
                </Box>  
            </AnimatedPage> 
        </Layout>
    )
}

export default MainMenu