import { Button, Input, VStack, HStack, Container, Box, Flex } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from "axios"

const MsgPopup = ({ startup, bearerToken  }) => {

    const [conversation, setConversation] = useState({messages: []})

    useEffect(() => {
        if (bearerToken == null)
            return

        const idDto = {
            id : startup.OwnerId
        }

        let config = {
            method: 'post',
            url: "https://localhost:44390/api/conversation",
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            },
            data: idDto
        }

        axios(config)
            .then(resp => {
                console.log("Returned Mssages " + resp.data)
                if (resp !== undefined && resp !== null && resp.length !== 0 ) {
                   
                    setConversation(resp.data)
                }
                else {
                    setConversation({ messages: [] });
                }

            })
    }, [])
    


    return(
        <VStack minH="50vh">
     
            <VStack minH="45vh" bg="white">
                {
                    conversation.messages.length !== 0 ? (
                        conversation.messages.map(msg => {
                            <MSG msg={msg} oddEven={(user.id !== msg.fromID)} />
                        })
                        ):null
                }

            </VStack>
            <Flex bg="#77777744" width="100%">
                <HStack pt="1em" width="100%" p={5}>
                    <Input bg="white" />      
                    <Button bg="blue.400" color="white" w="5em">Send</Button>
                </HStack> 
            </Flex>
        </VStack>
    )
}

const MSG = ({ msg, oddEven }) => {


    const {
        content,
        date
    } = msg


    return (
        <Flex w="100%" alignItems="end" >

            {
                oddEven ? <Spacer /> : null
            }
            <VStack alignItems="start" >
                <HStack>
                    <Text color="white">{date}</Text>
                </HStack>
                <Box bg={oddEven ? "brand.primary" : "brand.bl1"} p="2" borderRadius="0.5em">
                    <Text fontSize={20} minW="5em">{content}</Text>
                </Box>

            </VStack>
        </Flex>

    )
}



export default MsgPopup;