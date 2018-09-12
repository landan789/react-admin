
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import MemberPage from './../pages/Member';

const routes = [{
    path: '/member',
    component: MemberPage,
    exact: true
}];

const IndexRouters = () => (
    <BrowserRouter>
        <Switch>
            {routes.map((route) => (
            <Route 
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component} 
            />
            ))}
        </Switch>
    </BrowserRouter>
);

export default IndexRouters;
