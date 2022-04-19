import React, { useContext, useState, useEffect } from "react"
import { Box, 
    Button, 
    Container, 
    HStack, 
    Text, 
    Image, 
    Flex, 
    Spacer, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuOptionGroup,
    MenuItemOption, 
    useDisclosure, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
} from "@chakra-ui/react"
import Layout from "../../components/Layout"
import SearchBar from "../../components/SearchBar"
import {FaChevronDown} from "react-icons/fa"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import MsgPopup from "./MsgPopup"
import StartupDetail from "./StartupDetail"

import { withRequireAuth } from "../../components/RequireAuth"
import InvestorMenu from "./InvestorMenu"


//const startups = [
//    {
//        name: "Startup 1",
//        empNo: 5
//    },
//    {
//        name: "Startup 2",
//        empNo: 10
//    },
//    {
//        name: "Startup 3",
//        empNo: 6
//    },
//    {
//        name: "Startup 4",
//        empNo: 3
//    }
//]


const StartUpList = () => {

    const [startups, setStartups] = useState([])
    const ctx = useContext(AuthContext)

    var token = null

    if (ctx !== undefined)
        token = ctx.bearerToken;

    const callAPI = () => {
 
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

    useEffect(() => {
        let config = {
            method: 'get',
            url: "https://localhost:44390/api/startup",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        axios(config)
            .then(resp => {
                console.log(JSON.stringify(resp.data))
                setStartups(resp.data)
            })
    },[])


    const openDrawer = () =>{
        onClick(onOpen)
    }

    return(
        <Layout headerLinks={<InvestorMenu />}>
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
                        startups.length !== 0 ? (
                            startups.map( startup =>{
                               return  <ListItem startup={startup} mb={5} />
                            })

                        ) : <Box>Loading...</Box>
                       
                    }
                </Box>
            </Container> 
        </Layout>   
    )
}


const ListItem = ({startup}) =>{

    const { isOpen: isOpenModal, onOpen : onOpenModal, onClose : onCloseModal } = useDisclosure()
    const { isOpen : isDrawerOpen, onOpen : onOpenDrawer, onClose: onCloseDrawer } = useDisclosure()
    const btnRef = React.useRef()

    const{
        name,
        numEmployees,
        sector
    }  = startup

    const openModal = (event) =>{
        
        onOpenModal()
        event.stopPropagation() 
    }

    return(
        <Flex h="60px" p="5" bg="#FFFFFF22" alignItems="center" marginBottom={2} _hover={{shadow:"2xl", mt:"4", mb:"4", bg:"#FFFFFF55", color:"white", cursor:"pointer"} } btnRef={btnRef} onClick={onOpenDrawer} >
            <Image  />
            <Text width="8em" color="white" pr="5">{name}</Text>
            <Text width="12em" color="white" pr="5">No. Employees: {numEmployees}</Text>
            <Text width="12em" color="white" pr="5">Sector: {sector}</Text>
     
            <Spacer />
            <Button variant="primary" onClick={openModal}>Message</Button>

            <Modal isOpen={isOpenModal}  onClose={onCloseModal} size="4xl" isCentered  >
                <ModalOverlay />
                <ModalContent bg="white">
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody minH="50vh" p={0}>
                        <MsgPopup />
                    </ModalBody>
                </ModalContent>
            </Modal>

         <Drawer
            isOpen={isDrawerOpen}
            placement='right'
            onClose={onCloseDrawer}
            finalFocusRef={btnRef}
            size="lg"
            >
                {/* <DrawerOverlay /> */}
                <DrawerContent >
                    <DrawerHeader>{name}</DrawerHeader>

                    <DrawerBody width="100em">
                       <StartupDetail startup={startup} />
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

 export default withRequireAuth(StartUpList);
/*export default StartUpList;*/