import React, {useEffect, useState} from "react"
import {RadioGroup, Radio, FormHelperText, FormControl, FormLabel, Input, Box, Button, Container, HStack, VStack, Text, Image, Flex, Spacer, Menu, MenuButton, MenuList, MenuOptionGroup,MenuItemOption } from "@chakra-ui/react"
import AnimatedPage from "../../components/AnimatedPsge"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout";
import MainMenu from "./MainMenu"
import EditableList from 'react-list-editable'







const CashFlow = () => {

    const [entries, setEntries] = useState([
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
    ])


    const calculateTotal = () => {


        let sum = 0
        for (var i=0; i< entries.length; i++){
            console.log(sum)
            if (entries[i].type == "Income"){
                sum += parseInt(entries[i].value)
            } else {
                sum -= entries[i].value
            }
        }
        return sum;
    }


    const [description, setDescription] = useState()
    const [amount, setAmount] = useState(0)
    const [radio, setRadio] = useState("")
    const [total, setTotal] = useState(calculateTotal())
    
    

    const submit = () =>{

        const entry = {
            title: description,
            type: radio,
            value: amount
        }

        if (radio != "" && description != "" && amount > 0){
            setEntries(entries => [...entries, entry])


        }


    }




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
            <Flex h="60px" p="5" bg="#FFFFFF22" alignItems="center" marginBottom={2}>
                <Image  />
                <Text color="orange" pr="5" w="14%">Net Income</Text>
                <Spacer/>
                <Text color="white" pr="5"></Text>
                <Spacer/>
            {total < 0
                ? <Text color="red" pr="5">-${total}</Text>
                : <Text color="lightgreen" pr="5">${total}</Text>
            }

            

        </Flex>

                <Spacer/>
                <form>
                <FormControl as='fieldset' align="center">
                    <HStack>
                        <Input id='description' placeholder='Description' onChange={(e)=>setDescription(e.target.value)}/>
                        <Spacer/>
                        <VStack>
                        
                        <RadioGroup defaultValue='Itachi'>
                            <VStack spacing='24px' color="white">
                                <Radio value='Income' checked={radio === "Income"} onChange={(e)=>setRadio(e.target.value)}>Income</Radio>
                                <Radio value='Expense' checked={radio === "Expense"} onChange={(e)=>setRadio(e.target.value)}>Expense</Radio>
                            </VStack>
                        </RadioGroup>
                        </VStack>
                        <Spacer/>
                        <Input placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/>
                    </HStack>

                </FormControl>
                <Button mt={4} colorScheme='teal' onClick={()=>submit()}>
                Add Item
                </Button>
                </form>
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