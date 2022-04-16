import { Box, Container, Flex, HStack, Spacer, Text, VStack, Input, Button, useSafeLayoutEffect } from "@chakra-ui/react";
import React, { useContext, useEffect, useState} from "react"
import AnimatedPage from "../../components/AnimatedPsge";

const contacts = ["One", "Tweo", "Three", "Four" ]
import Layout from "../../components/Layout";
import { ApiUrls } from "../../constants/ApiConstants";
import InvestorMenu from "../investor/InvestorMenu";
import Menu from "./CommonMenu";
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

const msgs = [ {content : "Hello" , date : "10/7/12"}, {content : "Yoo" , date : "10/7/12"}, {content : "Hi" , date : "10/7/12"}]


const MessagesPage = () => {

    const { bearerToken } = useContext(AuthContext)


    const [msgToSend, setMsgToSend] = useState("");
    const [messages, setMessages] = useState([])

    const sendMsg = () => {
        console.log("Send Message Called")

      

        if (bearerToken == null) {
            console.log("No Token " + bearerToken)
            return
        }


        const msgDTO = {
            ConvoID: null,
            content: msgToSend
        }

        if (msgToSend !== "") {
            let config = {
                method: 'post',
                url: ApiUrls.sendMsg,
                headers: {
                    'Authorization': 'Bearer ' + bearerToken
                },
                data: msgDTO
            }

            axios(config)
                .then(resp => {
                    console.log(JSON.stringify(resp))
                })
        }
        
    }

    useEffect(() => {

       

        if (bearerToken == null)
            return

        let config = {
            method: 'get',
            url: ApiUrls.getMessages,
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }

        axios(config)
            .then(resp => {
                if (resp.messages != null) {
                    setMessages(resp.messages)
                }
                else {
                    setMessages([]);
                }
                    
            })
    }, [])


    return(
        <Layout headerLinks={<InvestorMenu />} >
            <AnimatedPage>
                <Container maxW='container.lg' h="90vh" bg="brand.glass" shadow="xl" p="0" borderRadius="2em">
            
                    <HStack h="100%" pt="5" >
                        <VStack w="20vw" h="100%" alignItems="start" bg="#FFFFFF" p="5" shadow="xl" borderRadius="1em">
                            <Text fontSize={30}>Messages</Text>
                            {
                                contacts.map( contact=>{
                                    return(
                                        <Box borderBottom="thin solid #22222277" w="100%" _hover={{bg:"brand.primary", color: "white", cursor:"pointer"}} p="2" borderRadius={5}>
                                            <Text fontWeight="bold">{contact}</Text> 
                                        </Box>
                                       
                                    )
                                })
                            }
                        </VStack>
                        <Flex  w="100%"  h="100%" direction="column">
                            <VStack w="100%" p="5" h="100%">
                            {
                                messages.map( (msg, idx) =>{
                                    console.log(idx)
                                    return(
                                        <MSG msg={msg} oddEven={((idx % 2) === 0)} />
                                    )
                                })
                            }
                            </VStack>
                            <HStack pt="1em" width="100%" p={5}>
                                <Input onChange={ (e)=>setMsgToSend(e.target.value)} bg="white" />
                                <Button onClick={() => sendMsg()} bg="blue.400" color="white" w="5em">Send</Button>
                            </HStack> 
                        </Flex>

                    </HStack>
                </Container>
            </AnimatedPage>
        </Layout>
    )
}


const MSG = ({msg, oddEven}) =>{

    console.log(msg + oddEven)

    const{
        content,
        date
    }  = msg


    return(
        <Flex w="100%" alignItems="end" >

            {
                oddEven ? <Spacer /> : null
            }
            <VStack alignItems="start" >
                <HStack>
                    <Text color="white">{date}</Text>
                </HStack>
                <Box bg={oddEven ?"brand.primary" : "brand.bl1"} p="2" borderRadius="0.5em">
                    <Text fontSize={20} minW="5em">{content}</Text> 
                </Box>
               
            </VStack> 
        </Flex>
       
    )
}


export default MessagesPage;