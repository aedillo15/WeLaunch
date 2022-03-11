import React, { Fragment } from 'react';
import {Routes, useMatch } from 'react-router';

import AuthorizeRoute from "../components/AuthorizeRoute"

export default function InternalRoutes() {

    // let { path } = useMatch();

    return (
        <Fragment>
            <Routes>
                {/* <AuthorizeRoute exact path={`${path}`} component={Home} redirectPath="/login" /> */}
            </Routes>
        </Fragment>
    )
}
