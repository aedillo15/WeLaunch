import React from "react"
import { HStack, Text, VStack, Image } from "@chakra-ui/react"

const StartupDetail = ({startup}) =>{

    const{
        name,
        empNo
    }  = startup

    return(
        <VStack h="100%" w="35vw">
            <HStack h="10em" w="100%">
                <Image />
                <Text>{name}</Text> 
            </HStack>

            <Text w="100%" fontSize={30}>About</Text>
            <Text w="100%" wordBreak="wrap">asdfkjldsfjkl;asdjefidfkjefjiasd;jfkefjioajasefijfilfasfjei;fiasjdflijejfisjaiefl;alsiejlsa;eifjas;iefjilsajdsfnfeniejajfihgheirjiao;sdfioejfioj </Text> 
            <Text w="100%" fontSize={30}>Employees</Text>
            <Text w="100%">5-10</Text> 
            <Text w="100%" fontSize={30}>Sector</Text>
            <Text w="100%">Agricuture</Text> 
            <Text w="100%" fontSize={30}>Money Raised</Text>
            <Text w="100%">3 million</Text> 
        </VStack>
        
    )
}

export default StartupDetail;