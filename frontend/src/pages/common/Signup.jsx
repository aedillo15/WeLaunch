import React, {useContext, useState} from "react"
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
import Menu from "./CommonMenu"

import { AuthContext } from "../../context/AuthContext"


import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'

export const Signup = () => {

    const [show, setShow] = useState(false)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()

    const {register} = useContext(AuthContext)


    const submit = () =>{
        if(email.length <=0 ){
            setError("Error")
        }
        else if(password.length <= 0){
            setError("Error")
        }
        else{
            let registerDto = {'name': name, 'email': email, 'password': password, 'confirmPassword': confirmPassword}
            register(registerDto) 
            console.log("regData " + JSON.stringify(registerDto))
        }   
    }

    return(
        <Layout headerLinks={<Menu />} >
            <AnimatedPage> 
                <Box w='100%'  >
                    <Container maxW='container.sm' h="90vh">
                        <VStack h="100%" justifyContent="center" alignItems="center">
                            <VStack spacing={3} w="50%" justifyContent="center" alignItems="center">
                                <Text fontSize={35} color="#FFFFFF33">Sign up</Text>
                                <Input 
                                    bg="#FFFFFF10" 
                                    color="white" 
                                    variant='filled' 
                                    placeholder='Name' 
                                    _hover={{ bg: '#FFFFFF33',  }}  
                                    focusBorderColor='#76D3E099' 
                                    onChange={(e)=>setName(e.target.value)} />
                                <Input 
                                    bg="#FFFFFF10" 
                                    color="white" 
                                    variant='filled' 
                                    placeholder='Email' 
                                    _hover={{ bg: '#FFFFFF33',  }}  
                                    focusBorderColor='#76D3E099' 
                                    onChange={(e)=>setEmail(e.target.value)} />
                                <Input 
                                    bg="#FFFFFF10" 
                                    color="white" 
                                    variant='filled' 
                                    placeholder='Password'
                                    _hover={{ bg: '#FFFFFF33',  }} 
                                    focusBorderColor='#76D3E099' 
                                    type={show ? 'text' : 'password'} 
                                    onChange={(e)=>setPassword(e.target.value)} />
                                <Input 
                                    bg="#FFFFFF10" 
                                    color="white" 
                                    variant='filled' 
                                    placeholder='Confirm Password' 
                                    _hover={{ bg: '#FFFFFF33',  }} 
                                    focusBorderColor='#76D3E099' 
                                    type={show ? 'text' : 'password'} 
                                    onChange={(e)=>setConfirmPassword(e.target.value)} />
                                <Button bg="#F28907" color="white"  _hover={{ bg: '#F2AF00' }} w="100%" onClick={()=>submit()} >Sign up</Button>
                                <HStack alignItems="start" w="100%">
                                <Text fontSize={12} color="#FFFFFF88">Alreadyt have an account?</Text> 
                                <UILink as={Link} fontSize={12} color="#F28907" to="/login" >Login</UILink>
                                </HStack>
                            </VStack>        
                        </VStack>
                    </Container>            
                </Box>  
            </AnimatedPage>   
        </Layout>
    )
}
