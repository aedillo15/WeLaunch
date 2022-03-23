import React, { useContext, useEffect } from "react"
import { Box, Button, Container, HStack, Text, Image, Flex, Spacer, Menu, MenuButton, MenuList, MenuOptionGroup,MenuItemOption } from "@chakra-ui/react"
import Layout from "../../components/Layout"
import SearchBar from "../../components/SearchBar"
import {FaChevronDown} from "react-icons/fa"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"

import { withRequireAuth } from "../../components/RequireAuth"


const startups = [
    {
        name: "Startup 1",
        empNo: 5
    },
    {
        name: "Startup 2",
        empNo: 10
    },
    {
        name: "Startup 3",
        empNo: 6
    },
    {
        name: "Startup 4",
        empNo: 3
    }
]


const StartUpList = () => {

    const { getBearerToken } = useContext(AuthContext)  

    const callAPI = () => {
        const token = getBearerToken()
        console.log('Token ' + token)
        let config = {
            method: 'get',
            url: "https://localhost:44390/api/TestAuth",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        axios(config)
            .then(resp => {
                console.log(JSON.stringify(resp))
            })
    }

    return(
        <Layout>
            <Container maxW='container.lg' h="90vh" pt={10} >
                <SearchBar>
                    <HStack>
                        <Menu closeOnSelect={false}>
                            <MenuButton as={Button} rightIcon={<FaChevronDown />} bg="brand.glass" color="white" _focus={{bg:'brand.lightText'}} _hover={{bg:'brand.lightText'}} >
                                Company Size
                            </MenuButton>
                            <MenuList>
                            <MenuOptionGroup title='Size' type='checkbox'>
                                <MenuItemOption value='5'>0-5</MenuItemOption>
                                <MenuItemOption value='10'>5-10</MenuItemOption>
                                <MenuItemOption value='50'>10-50</MenuItemOption>
                                <MenuItemOption value='100'>50-100</MenuItemOption>
                                <MenuItemOption value='500'>100+</MenuItemOption>
                            </MenuOptionGroup>
                            </MenuList>
                        </Menu>

                        <Menu closeOnSelect={false}>
                            <MenuButton as={Button} rightIcon={<FaChevronDown />}  bg="brand.glass" color="white" _focus={{bg:'brand.lightText'}} _hover={{bg:'brand.lightText'}} >
                                Domain
                            </MenuButton>
                            <MenuList>
                            <MenuOptionGroup title='Domain' type='checkbox'>
                                <MenuItemOption value='retail'>Retail</MenuItemOption>
                                <MenuItemOption value='industrial'>Industrial</MenuItemOption>
                                <MenuItemOption value='software'>Software</MenuItemOption>
                            </MenuOptionGroup>
                            </MenuList>
                        </Menu>

                        <Button onClick={() =>callAPI()}>callAPI</Button>
                    </HStack>
                </SearchBar>
                <Box  h="100%" pt={5}> 
                    {
                        startups.map( startup =>{
                           return  <ListItem startup={startup} mb={5} />
                        })
                    }
                </Box>

            </Container> 
        </Layout>
    )
}


const ListItem = ({startup}) =>{

    const{
        name,
        empNo
    }  = startup

    return(
        <Flex h="60px" p="5" bg="#FFFFFF22" alignItems="center" marginBottom={2}>
            <Image  />
            <Text color="white" pr="5">{name}</Text>
            <Text color="white" pr="5">No. Employees {empNo}</Text>
            <Spacer />
            <Button variant="primary">Message</Button>
        </Flex>
    )
}

export default withRequireAuth(StartUpList);