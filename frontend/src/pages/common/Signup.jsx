import React, {useContext, useState} from "react"
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
import Menu from "./CommonMenu"

import { AuthContext } from "../../context/AuthContext"


import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink, Select, RadioGroup, Radio, Stack } from '@chakra-ui/react'
import CustomInput from "../../components/CustomInput"

export const Signup = () => {

    const [show, setShow] = useState(false)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [role, setRole] = useState("Investor")


    const {register} = useContext(AuthContext)


    const submit = () =>{

        const passwordRegex =  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        var fail = false;

        if(name === ""){
            setNameError("Name cannot be empty")
            fail = true
        }
        else{
            setNameError("")
        }

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
        else if(confirmPassword !== password)
        {
            setPasswordError("Passwords must match")
            fail = true
        }
        else{
            setPasswordError("")
        }

        if (!fail) {

            console.log("role " + role)
            const registerDto = {
                'name': name,
                'email': email, 
                'role': role,
                'password': password,
                'confirmPassword': confirmPassword
            }

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
                                <CustomInput placeholder="Name" onChange={(e)=>setName(e.target.value)} error={nameError} />
                                <CustomInput placeholder="Email" onChange={(e) => setEmail(e.target.value)} error={emailError} />
                                <Select onChange={ (e)=>setRole(e.target.value)} placeholder='Select option' color="white" >
                                    <option color="black" value='Entrepreneur'>Entrepreneur</option>
                                    <option value='Investor'>Investor</option>
                                    <option value='Accelerator'>Accelerator</option>
                                </Select>
                   
                                <CustomInput placeholder="Password" onChange={(e)=>setPassword(e.target.value)} error={passwordError} type={show ? 'text' : 'password'}  />
                                <CustomInput placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} type={show ? 'text' : 'password'}  />
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
