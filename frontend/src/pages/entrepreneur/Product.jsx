import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import MainMenu from "./MainMenu"





const Product = () => {

    

    return(


        <MainMenu>
            <Text fontSize={45} color="#e2f7d2">Product Page.  What are you selling?</Text>
            <Text fontSize={15} color="#e2f7d2">Businesses make money buy selling products and services.  What will your business sell?  What does it cost to create and distribute your product?</Text>

        </MainMenu>


    )
}

export default Product;