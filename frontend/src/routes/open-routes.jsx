import React, { Fragment } from 'react';
import { Route, Routes, useMatch } from 'react-router';

import {Login} from '../pages/Login';
import {Signup} from '../pages/Signup';


export default function OpenRoutes(){
   
    return(
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
        </Routes>
    );
}