import React, {createContext, useState} from "react"
import axios from 'axios';
import qs from 'qs';
import {ApiUrls} from "../constants/ApiConstants"
import { useNavigate  } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
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
                console.log(JSON.stringify(bearerToken))
                
                return await getUser()
            }
        })
        .catch(error => {
            setError(error.response);
            setAuthenticated(false)
            setBearerToken(null)
            console.log( JSON.stringify(error))
        });
    }

    const  getUser = async () =>{
        let config = {
            method: 'get',
            url: "https://localhost:44390/api/user",
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }
        axios(config)
        .then(resp => {
            if (resp?.data !== null) {
                    setUser(resp.data)
                    console.log(JSON.stringify(resp))
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

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;