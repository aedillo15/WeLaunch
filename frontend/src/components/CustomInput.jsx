import React from "react"
import { VStack, Input, Text } from "@chakra-ui/react"

const CustomInput = ({placeholder, onChange, error, type}) =>{
    return(
        <VStack w="100%" align="start">
            <Text color="red" >{error}</Text>
            <Input 
                bg="#FFFFFF10" 
                color="white" 
                variant='filled' 
                type={type}
                placeholder={placeholder}
                _hover={{ bg: '#FFFFFF33',  }}  
                focusBorderColor='#76D3E099' 
                onChange={onChange} />
        </VStack>
    )

}

export default CustomInput;