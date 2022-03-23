import React, { useContext} from "react";

import { useNavigate, Navigate, useLocation } from "react-router-dom"
import AuthContext from "../../context/AuthContext"



export const RequireAuth = () =>{
    const { login } = useContext(AuthContext)
    //let location = useLocation();

    return ( 
       <div>HI</div>

    )


}

   

