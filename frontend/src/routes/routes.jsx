import React from 'react';
import {useLocation,Routes, Route} from 'react-router-dom';

import {Login} from '../pages/common/Login';
import {Signup} from '../pages/common/Signup';
import MainMenu from '../pages/entrepreneur/MainMenu';

import CashFlow from '../pages/entrepreneur/CashFlow';
import Product from '../pages/entrepreneur/Product';
import Welcome from '../pages/entrepreneur/Welcome';
import Incorporate from '../pages/entrepreneur/Incorporate';

import FrontPage from '../pages/common/FrontPage';
import StartUpList from '../pages/investor/StartupList';
import CashFlow from '../pages/entrepreneur/CashFlow';



export default function OpenRoutes(){
   const location = useLocation();

    return(
        <Routes location={location} key={location.pathname}>
            {/*---------- Open Routes *---------- */}
            <Route  path="/" element={<FrontPage />}/>
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />


            <Route  path="/Welcome" element={<Welcome />} />
            <Route  path="/Incorporate" element={<Incorporate />} />
            <Route  path="/cashflow" element={<CashFlow />} />
            <Route  path="/Product" element={<Product />} />

            <Route  path="/entrepreneur" element={<MainMenu />} />
            <Route  path="/entrepreneur/cashflow" element={<CashFlow />} />

            {/*---------- Protected Routes *---------- */}
            <Route path="/investor" element={<StartUpList />} />
        </Routes>
    );
}