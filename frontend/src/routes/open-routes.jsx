import React from 'react';
import {useLocation,Routes, Route} from 'react-router-dom';

import {Login} from '../pages/common/Login';
import {Signup} from '../pages/common/Signup';
import MainMenu from '../pages/entrepreneur/MainMenu';
import CashFlow from '../pages/entrepreneur/CashFlow';
import FrontPage from '../pages/common/FrontPage';
import StartUpList from '../pages/investor/StartupList';

export default function OpenRoutes(){
   const location = useLocation();

    return(
        <Routes location={location} key={location.pathname}>
            <Route  path="/" element={<FrontPage />}/>
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />
            <Route  path="/entrepreneur" element={<MainMenu />} />
            <Route  path="/entrepreneur/cashflow" element={<CashFlow />} />
            <Route  path="/investor" element={<StartUpList />} />
        </Routes>
    );
}