import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import MainMenu from "./MainMenu"





const Product = () => {

    const [show, setShow] = useState(false)

    return(


        <MainMenu>
            <Text fontSize={35} color="#FFFFFF33">Product Page Starts Here</Text>

        </MainMenu>


    )
}

export default Product;