import React from 'react';
import {useLocation,Routes, Route} from 'react-router-dom';

import AuthorizeRoute from "../components/AuthorizeRoute"


export default function InternalRoutes() {

    // let { path } = useMatch();

    return (
        <Routes>
                {/* <AuthorizeRoute exact path={`${path}`} component={Home} redirectPath="/login" /> */}
        </Routes>
    )
}
