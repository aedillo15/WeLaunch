import React, {useState} from "react"
import { Box, Button, Container, HStack, Text, Image, Flex, Spacer, Menu, MenuButton, MenuList, MenuOptionGroup,MenuItemOption } from "@chakra-ui/react"
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import MainMenu from "./MainMenu"
import EditableList from 'react-list-editable'

const entries = [
    {
        title: "Taxes",
        type: "Expense",
        value: 10000
    },
    {
        title: "Employee Salaries",
        type: "Expense",
        value: 50000
    },
    {
        title: "Investments",
        type: "Income",
        value: 5000
    },
    {
        title: "Sales",
        type: "Income",
        value: 75000
    }
]



const CashFlow = () => {


    const [show, setShow] = useState(false)



    return(


        <MainMenu>
            <Text fontSize={45} color="#e2f7d2">Cash Flow</Text>
            <Text fontSize={15} color="#e2f7d2">This is the cash flow page.  In this page, you will plan the finances of your business by estimating incomes and expenses</Text>
            
            <Box  h="100%" w="60%" pt={5}> 
                    {
                        entries.map( entry =>{
                           return  <ListItem entry={entry} mb={5} />
                        })
                    }
                </Box>
            
        </MainMenu>


    )
}

const ListItem = ({entry}) =>{

    const{
        title,
        type,
        value
    }  = entry

    return(
        <Flex h="60px" p="5" bg="#FFFFFF22" alignItems="center" marginBottom={2}>
            <Image  />
            <Text color="white" pr="5" w="14%">{title}</Text>
            <Spacer/>
            <Text color="white" pr="5">{type}</Text>
            <Spacer/>
            {type == 'Expense'
                ? <Text color="red" pr="5">-${value}</Text>
                : <Text color="lightgreen" pr="5">${value}</Text>
            }

            

        </Flex>
    )
}

export default CashFlow;