
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AboutPage from './../pages/About';
import ContactPage from './../pages/Contact';
import HomePage from './../pages/Home';
import MemberPage from './../pages/Member';

const routes = [{
    path: '/about',
    component: AboutPage,
    exact: true
}, {
    path: '/contact',
    component: ContactPage,
    exact: true
}, {
    path: '/home',
    component: HomePage,
    exact: true
}, {
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
