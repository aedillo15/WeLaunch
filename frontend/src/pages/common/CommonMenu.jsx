import React from "react"

import { HStack, Link as UILink } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Menu =()=>{
    return(
        <HStack>
            <UILink as={Link} to='/login'>
                Login
            </UILink>
            <UILink as={Link } to='/signup' >
                Signup
            </UILink>
            <UILink as={Link} to='/investor' >
                Investor
            </UILink>
        </HStack>

    )
}

export default Menu;