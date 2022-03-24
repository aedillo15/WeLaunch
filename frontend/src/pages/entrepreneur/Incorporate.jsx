import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import MainMenu from "./MainMenu"





const Incorporate = () => {

    const [show, setShow] = useState(false)

    return(


        <MainMenu>
            <Text fontSize={45} color="#e2f7d2" justifyContent="top">Incorporation (in Canada) </Text>
            <Text fontSize={15} color="#e2f7d2" justifyContent="top">The first step of launching a business is to officially incorporate with the federal government.</Text>

        </MainMenu>


    )
}

export default Incorporate;