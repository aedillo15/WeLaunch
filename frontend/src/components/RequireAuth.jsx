import React, { useContext} from "react";
import { Navigate } from "react-router-dom"
import {AuthContext} from "../context/AuthContext"

export const withRequireAuth = (WrappedComponent) =>{
    return function(props){
        const { authenticated } = useContext(AuthContext)

        if(!authenticated){
            return <Navigate to="/login" />
        }else{
            return <WrappedComponent {...props} />
        }
    }
}

