import React from "react"
import { Text } from "@chakra-ui/react"

const StartupDetail = ({startup}) =>{

    const{
        name,
        empNo
    }  = startup

    return(
        <Text>Startup Detail: {name}</Text>
    )
}

export default StartupDetail;