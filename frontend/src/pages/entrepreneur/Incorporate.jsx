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
            <HStack color="#ffc7c7">
                <Text fontSize={15} color="#e2f7d2">The first step of launching a business is to officially incorporate with the government.</Text>
                <Text fontSize={15} color="#e2f7d2">The official step by step process as deemed by the federal government can be found</Text>
                <a as="i" color="#e2f7d2" href="https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/cs06642.html">here</a>

            </HStack>
            <Text fontSize={25} width="83%" color="#e2f7d2">Options for a new business:</Text>
            <Text fontSize={20} width="83%" color="#e2f7d2">Federal Incorporation</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-Company name protected across Canada</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-Head office can be anywhere in Canada</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-At least 25% of the directors must reside in Canada and be Canadian Citizens</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-With appropriate licenses, you can do business Canada-wide</Text>


            <Text fontSize={20} width="83%" color="#e2f7d2">Provincial Incorporation</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-Cheaper</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-Faster</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-Less administrative work</Text>
            <Text fontSize={15} width="73%" color="#e2f7d2">-Additional licenses required to operate outside of designated province</Text>

            <Text fontSize={20} width="83%" color="#e2f7d2">If you choose wrong at first, you can change later but it is more time consuming and expensive!</Text>






            

        </MainMenu>


    )
}

export default Incorporate;