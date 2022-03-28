import React, {useState} from "react"
import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink } from '@chakra-ui/react'
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import MainMenu from "./MainMenu"
import EditableList from 'react-list-editable'





const CashFlow = () => {

    const [show, setShow] = useState(false)

    return(


        <MainMenu>
            <Text fontSize={45} color="#e2f7d2">Cash Flow</Text>
            <Text fontSize={15} color="#e2f7d2">This is the cash flow page.  In this page, you will plan the finances of your business by estimating incomes and expenses</Text>

        </MainMenu>


    )
}

export default CashFlow;