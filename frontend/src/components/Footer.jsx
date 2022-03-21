import React from "react" 
import { Container, HStack, Text } from "@chakra-ui/react"

const Footer = () =>{
    return(
        <Container maxW='container.lg' h="5vh">
            <HStack w="100%" justifyContent="center">
                <Text color="#FFFFFF33">@WeLaunch2022</Text>
            </HStack>
        </Container>
    )
}

export default Footer;