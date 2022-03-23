import React, {createContext, useState} from "react"
import axios from 'axios';
import qs from 'qs';
import {ApiUrls} from "../constants/ApiConstants"
/*import { useNavigate  } from 'react-router-dom';*/
import { Login } from "../pages/common/Login";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //Change this to true to access protected pages
    const [authenticated, setAuthenticated] = useState(false)
    const [error, setError] = useState();
    const [bearerToken, setBearerToken] = useState(null)


    const login = (loginDto) => {
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
            }
        })
        .catch(error => {
            setError(error.response);
            setAuthenticated(false)
            setBearerToken(null)
            console.log( JSON.stringify(error))
        });
    }

    const register = (userDto) => {
        axios.post(ApiUrls.register, userDto)
            .then(() =>{
             /*   navigate("/login")*/
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
        authenticated
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;