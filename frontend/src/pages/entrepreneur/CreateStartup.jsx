import React, {useContext, useState} from "react"
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
import Menu from "./CommonMenu"
import CustomInput from "../../components/CustomInput"
import {FaChevronDown} from "react-icons/fa"

import { AuthContext } from "../../context/AuthContext"


import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink,InputGroup, InputRightElement, IconButton} from '@chakra-ui/react'

export const CreateStartup = ()=>{


    const [startupName, setStartupName] = useState("")
    const [createError, setCreateError] = useState("")


    const submit = () =>{
        
    }

    return(  
        <Layout headerLinks={<Menu />} >
            <AnimatedPage>
                <Box w='100%'>
                    <Container maxW='container.sm' h="90vh">
                        <VStack h="100%" justifyContent="center" alignItems="center">
                            <VStack spacing={3} w="50%" justifyContent="center" alignItems="center">
                                <Text fontSize={35} color="brand.lightText">Create Startup</Text>
                                <CustomInput placeholder="Startup Name" onChange={(e)=>setStartupName(e.target.value)} error={createError} />
                     
                                <Button variant="primary" w="100%" onClick={()=>submit()} >CREATE</Button>
                            </VStack>        
                        </VStack>
                    </Container>            
                </Box>
            </AnimatedPage>    
        </Layout>
    )
}
