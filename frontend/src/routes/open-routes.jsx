import React from 'react';
import {useLocation,Routes, Route} from 'react-router-dom';

import {Login} from '../pages/Login';
import {Signup} from '../pages/Signup';
import {MainMenu} from '../pages/MainMenu';

export default function OpenRoutes(){
   const location = useLocation();

    return(
        <Routes location={location} key={location.pathname}>
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />
            <Route  path="/mainmenu" element={<MainMenu />} />

        </Routes>
    );
}