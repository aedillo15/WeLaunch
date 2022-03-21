import React from "react";
import AnimatedPage from "../../components/AnimatedPsge";
import Layout from "../../components/Layout";
import { Box, Container, VStack, Text, HStack } from "@chakra-ui/react";
import Menu from "./CommonMenu"

const FrontPage = () =>{
    return(
        <Layout headerLinks={<Menu />} >
            <AnimatedPage>
                <Box w='100%' h='90vh'  >
                    <Container maxW='container.lg' h="60%">
                        <VStack align="start" h="100%" justifyContent="center">
                            <Text color="#FFFFFF" fontSize={110}>WeLaunch</Text>
                            <Text color="#FFFFFF" fontSize={30}>Empowering Tommorow's Businesses</Text>
                        </VStack>
                    </Container>
                </Box>
            </AnimatedPage>
        </Layout>
 
    )
}

export default FrontPage;