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
            <Text fontSize={45} color="#e2f7d2">Incorporation (in Canada) </Text>
            <Text fontSize={15} color="#e2f7d2">The first step of launching a business is to officially incorporate with the federal government.</Text>
            <HStack>            
                <Text fontSize={15} color="#e2f7d2">The official step by step process as deemed by the federal government can be found</Text>
                <a as="i" color="#e2f7d2" href="https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/cs06642.html">here</a>

            </HStack>
            <Text fontSize={25} justifyContent = "left" float="left" alignContent="left" color="#e2f7d2">Options for a new business:</Text>


            

        </MainMenu>


    )
}

export default Incorporate;