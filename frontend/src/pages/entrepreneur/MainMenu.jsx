import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import Menu from "../common/CommonMenu"





const MainMenu = (props) => {

    const [show, setShow] = useState(false)

    return(
        <Layout>
            <AnimatedPage> 
                <Box w='100%' h='100%' bgGradient='linear(to-br, #4D748C, #1B3059)' >
                    <Container maxW='container.xxl' h="90vh">
                        
                        <VStack h="100%" justifyContent="left" alignItems="left">
                            <HStack>
                            <VStack spacing={3} w="20%" justifyContent="center" alignItems="center">
                                <Text fontSize={35} color="#FFFFFF33">The Actual Business Name</Text>
                            
                                <Button bg="#AAC1E6" color="white"  _hover={{ bg: '#89a1c7' }} w="100%" >Incorporate</Button>
                                <Button bg="#AAC1E6" color="white"  _hover={{ bg: '#89a1c7' }} w="100%" >Product</Button>
                                <Button bg="#AAC1E6" color="white"  _hover={{ bg: '#89a1c7' }} w="100%" >Cash Flow</Button>
                                <Button bg="#AAC1E6" color="white"  _hover={{ bg: '#89a1c7' }} w="100%" >Sale Method</Button>
                                <Button bg="#AAC1E6" color="white"  _hover={{ bg: '#89a1c7' }} w="100%" >More</Button>
                                <Button bg="#AAC1E6" color="white"  _hover={{ bg: '#89a1c7' }} w="100%" >Buttons</Button>
                                <Button bg="#AAC1E6" color="white"  _hover={{ bg: '#89a1c7' }} w="100%" >Here</Button>

                            </VStack>   
                            <Box w="80%" pl="20">
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