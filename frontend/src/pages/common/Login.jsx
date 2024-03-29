import React, {useContext, useEffect, useState} from "react"
import AnimatedPage from "../../components/AnimatedPsge"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/Layout"
import Menu from "./CommonMenu"
import CustomInput from "../../components/CustomInput"
import {FaChevronDown} from "react-icons/fa"

import { AuthContext } from "../../context/AuthContext"


import { Container, Text, VStack, Box, Button, HStack, Link as UILink,} from '@chakra-ui/react'

export const Login = ()=>{

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const { login, user } = useContext(AuthContext)

    const navigate = useNavigate()

    const submit = () =>{

        const passwordRegex =  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        var fail = false

        if(email === ""){
            setEmailError("Email cannot be empty")
            fail = true
        }
        else if(!emailRegex.test(email)){
            setEmailError("Must enter a valid Email")
            fail = true
        }
        else{
            setEmailError("")
        }

        if(password === ""){
            setPasswordError("Password cannot be empty")
            fail = true
        }
        else if(!passwordRegex.test(password)){
            console.log("Password Empty!")
            setPasswordError("Password must be 8 characters long with One Upper and lower character, one number and a special character")
            fail = true
        }
        else{
            setPasswordError("")
        }

        if(!fail){
            let loginData = {
                'username': email,
                'password': password,
                'grant_type': 'password',
                'client_id': 'default-client',
                'client_secret':'499D56FA-B47B-5199-BA61-B298D431C318'
            }
             login(loginData)
        }   
    }

    useEffect(() => {
        if (user !== undefined && user.userRoles !== undefined) {
        
            if (user.userRoles[0] === "Investor")           { navigate("/investor") }
            else if (user.userRoles[0] === "Entrepreneur")  { navigate("/onboard") }
            else if (user.userRoles[0] === "Accelerator")   { navigate("/accelerator") }
            else                                            { navigate("/login") }
    
        }
    }, [user]);

    return(  
        <Layout headerLinks={<Menu />} >
            <AnimatedPage>
                <Box w='100%'>
                    <Container maxW='container.sm' h="90vh">
                        <VStack h="100%" justifyContent="center" alignItems="center">
                            <VStack spacing={3} w="50%" justifyContent="center" alignItems="center">
                                <Text fontSize={35} color="brand.lightText">Login</Text>
                                <CustomInput placeholder="Email" onChange={(e)=>setEmail(e.target.value)} error={emailError} />
                                <CustomInput placeholder="Password" onChange={(e)=>setPassword(e.target.value)} error={passwordError} type={show ? 'text' : 'password'}  />
                                <Button variant="primary" w="100%" onClick={()=>submit()} >LOGIN</Button>
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
