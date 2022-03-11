import React, { Fragment } from 'react';
import { Route, Routes, useMatch } from 'react-router';


export default function OpenRoutes(){

    // let { path } = useMatch();
   
    return(
        <Fragment>
            <Routes>
                {/* <Route path={`${path}login`} component={Login} />
                <Route path={`${path}signup`} component={Register} /> */}
            </Routes>
        </Fragment>
    );
}