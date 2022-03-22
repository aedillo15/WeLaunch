import React, {createContext, useState} from "react"
import axios from 'axios';
import {ApiUrls} from "../constants/ApiConstants"
import { useNavigate  } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [projectList, setProjectList] = useState([]);
    const [authenticated, setAuthenticated] = useState(false)
    const [error, setError] = useState();

    const [bearerToken, setBearerToken] = useState(null)


    const navigate = useNavigate();

    const login = (loginDto) => {
        
        axios.post(ApiUrls.login, loginDto)
            .then(response => {
                if (response !== null) {
                    setAuthenticated(true)
                    //bearerToken(response.data.bearerToken)
                }
            })
            .catch(error => {
                setError(error.response);
                setAuthenticated(false)
                setBearerToken(null)
            });
    }

    const register = (userDto) => {
        axios.post(ApiUrls.register, userDto)
            .then(() =>{
                navigate("/login")
            })
            .catch(error => {
                setError(error.response.data);
            });
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                register,
                // logout,     
                // authenticated,
                // user,
                // error,
                // setError
            }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;