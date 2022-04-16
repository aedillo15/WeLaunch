import React, { useContext, useEffect, useState } from "react"
import AnimatedPage from "../../components/AnimatedPsge"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/Layout"
import Menu from "../common/CommonMenu"
import CustomInput from "../../components/CustomInput"
import { FaChevronDown } from "react-icons/fa"

import { AuthContext } from "../../context/AuthContext"

import axios from "axios"


import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink, Textarea, Select, IconButton } from '@chakra-ui/react'

export const OnBoardingStartupPage = () => {

    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)

    const [name, setName] = useState()
    const [about, setAbout] = useState()
    const [numEmp, setNumEmp] = useState()
    const [sector, setSector] = useState()
    const [money, setMoney] = useState()

 
    const { bearerToken, user } = useContext(AuthContext)
        
    const navigate = useNavigate()


    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setAbout(inputValue)
    }

    const submit = () => {

        console.log("ID " + JSON.stringify(user.user.id))

        let startupData = {
            'name': name,
            'about': about,
            'numEmp': numEmp,
            'sector': sector,
            'money': money,
            'ownerID': user.user.id
        }


        let config = {
            method: 'post',
            url: "https://localhost:44390/api/TestAuth",
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            },
            data: startupData   
        }

        axios(config)
            .then(resp => {
                console.log(JSON.stringify(resp))
                navigate("/entrepeneur")
            })
    }


    return (
        <Layout headerLinks={<Menu />} >
            <AnimatedPage>
                <Box w='100%'>
                    <Container maxW='container.lg' h="90vh">
                        <VStack h="100%" justifyContent="center" alignItems="center">
                            <VStack spacing={3} w="50%" justifyContent="center" alignItems="center">
                                <Text fontSize={35} color="brand.lightText">Tell Us About Yourself</Text>
                                <CustomInput placeholder="Name" onChange={(e) => setName(e.target.value)}  />
                                <Textarea color="white" placeholder='What is your company about?' onChange={handleInputChange} />
                                <CustomInput placeholder="Number of Employees" onChange={(e) => setNumEmp(e.target.value)} />
                                <Select onChange={(e) => setSector(e.target.value)} placeholder='Select Sector' color="white" >
                                    <option color="black" value='Tech'>Tech</option>
                                    <option value='Agriculture'>Agriculture</option>
                                    <option value='Manufacturing'>Manufacturing</option>
                                    <option value='Retail'>Retail</option>
                                </Select>
                                <CustomInput placeholder="Money Raised" onChange={(e) => setMoney(e.target.value)} />
                                <Button variant="primary" w="100%" onClick={() => submit()} >Setup</Button>
                            </VStack>
                        </VStack>
                    </Container>
                </Box>
            </AnimatedPage>
        </Layout>
    )
}
