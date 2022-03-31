import React from "react"

import { HStack, Link as UILink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const InvestorMenu = () =>{
    return (
        <HStack>
        <UILink as={Link} to='/investor' >
            Home
        </UILink>
        <UILink as={Link} to='/messages' >
            messages
        </UILink>
    </HStack>
    )
}

export default InvestorMenu;