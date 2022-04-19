import React from "react"
import { HStack, Text, VStack, Image } from "@chakra-ui/react"

const StartupDetail = ({startup}) =>{

    const{
        name,
        numEmployees,
        about,
        moneyRaised
    }  = startup

    return(
        <VStack h="100%" w="35vw">
            <Text w="100%" fontSize={30}>About</Text>
            <Text w="100%" wordBreak="wrap">{ about } </Text>
            <Text w="100%" fontSize={30}>Employees</Text>
            <Text w="100%">{numEmployees}</Text>
            <Text w="100%" fontSize={30}>Sector</Text>
            <Text w="100%">Agricuture</Text> 
            <Text w="100%" fontSize={30}>Capital Raised</Text>
            <Text w="100%">${moneyRaised }</Text>
        </VStack>
        
    )
}

export default StartupDetail;