import React, {createContext, useState, useEffect} from "react"
import axios from 'axios';
import qs from 'qs';
import {ApiUrls} from "../constants/ApiConstants"
import { useNavigate  } from 'react-router-dom';

export const AuthContext = createContext(null);

import { Container, Input, Text, VStack, Box, Button, HStack, Link as UILink, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("hello1");
    //Change this to true to access protected pages
    const [authenticated, setAuthenticated] = useState(false)
    const [error, setError] = useState();
    const [bearerToken, setBearerToken] = useState(null)

    const navigate = useNavigate()


    const login = async (loginDto) => {
        var data = qs.stringify(loginDto);
        var config = {
            method: 'post',
            url: 'https://localhost:44390/connect/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        axios(config)
        .then(response => {
            if (response !== null) {
                setAuthenticated(true)
                setBearerToken(response.data.access_token)
            /*    console.log("Token " + JSON.stringify(response.data.access_token))*/
                
                return getUser(response.data.access_token)
            }
        })
        .catch(error => {
            setError(error.response);
            setAuthenticated(false)
            setBearerToken(null)
            console.log( JSON.stringify(error))
        });
    }

    const  getUser = async (token) =>{
        let config = {
            method: 'get',
            url: "https://localhost:44390/api/account/user",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        axios(config)
        .then(resp => {
            if (resp?.data !== null) {
                    setUser(resp.data)
                /*    console.log(JSON.stringify(resp))*/
                    return resp.data
            }
        
        })
    }

    const register = async (userDto) => {
        axios.post(ApiUrls.register, userDto)
            .then(() =>{
                navigate("/login")
            })
            .catch(error => {
                setError(error.response.data);
            });
    }

    const getBearerToken = () => {
        console.log(bearerToken)
        return bearerToken  
    }

    let value = {
        login,
        register,
        getBearerToken,
        authenticated,
        user
    }

    //useEffect(() => {
    //    if (user3 !== null) {
    //        console.log("user " + JSON.stringify(user3))
    //        //if(user.userRole[0] === "Admin")          { Navigate("/startuplist") }
    //        //else if (user.userRole === "entrepreneur") { Navigate("/entrepreneur") }
    //        //else if (user.userRole === "accelerator")  { Navigate("/accelerator") }
    //        //else                                  { Navigate("/login") }

    //    }
    //    console.log("user3 " + JSON.stringify(user3))
    //}, [user3]);

    return (
        <AuthContext.Provider value={value}>
           {/* <Text>{ user3 }</Text>*/}
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;