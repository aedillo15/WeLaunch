import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import MainMenu from "./MainMenu"





const Welcome = () => {

    const [show, setShow] = useState(false)

    return(


        <MainMenu>
            <Text fontSize={35} color="#FFFFFF33">Welcome to WeLaunch!</Text>

        </MainMenu>


    )
}

export default Welcome;