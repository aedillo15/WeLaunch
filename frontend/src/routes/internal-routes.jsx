import React, { Fragment } from 'react';
import { Route, Routes, useMatch } from 'react-router';

import AuthorizeRoute from "../components/AuthorizeRoute"

import { Login } from '../pages/Login';

export default function InternalRoutes() {

    // let { path } = useMatch();

    return (
        <Routes>
                {/* <AuthorizeRoute exact path={`${path}`} component={Home} redirectPath="/login" /> */}
        </Routes>
    )
}
