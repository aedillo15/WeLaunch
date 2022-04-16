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
            <Text fontSize={45} color="#e2f7d2">Welcome to WeLaunch!</Text>
            <Text fontSize={15} color="#e2f7d2">On the left of the page, there are a list of items relevant to starting your business</Text>
            <Text fontSize={15} color="#e2f7d2">Each page will provide information </Text>

        </MainMenu>


    )
}

export default Welcome;