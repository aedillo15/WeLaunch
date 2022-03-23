import React from 'react';
import {useLocation,Routes, Route} from 'react-router-dom';

import {Login} from '../pages/common/Login';
import {Signup} from '../pages/common/Signup';
import {MainMenu} from '../pages/entrepreneur/MainMenu';
import FrontPage from '../pages/common/FrontPage';
import StartUpList from '../pages/investor/StartupList';
import { RequireAuth } from "../pages/common/RequireAuth"

export default function OpenRoutes(){
   const location = useLocation();

    return(
        <Routes location={location} key={location.pathname}>
            <Route  path="/" element={<FrontPage />}/>
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />
            <Route  path="/mainmenu" element={<MainMenu />} />
            <Route path="/investor" element={<StartUpList />} />
            <Route exact path={'/investor2'} element={<RequireAuth />} />
        </Routes>
    );
}