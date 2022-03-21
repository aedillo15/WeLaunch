import React from "react";
import { Container, Flex, Spacer, Link as UILink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = ({children}) =>{
    return(
        <Container maxW='container.lg' h="5vh" >
            <Flex justifyContent="center" h="100%" alignItems="center">
                <UILink as={Link} fontSize={20} to="/">We Launch</UILink>
                <Spacer />
                {children}
            </Flex>
        </Container>
    )
}

export default Header;