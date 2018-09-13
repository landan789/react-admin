
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import SidebarComponent from './../components/Sidebar';
import AboutPage from './../pages/About';
import ContactPage from './../pages/Contact';
import HomePage from './../pages/Home';
import MemberPage from './../pages/Member';

const routes = [{
    path: '/about',
    component: SidebarComponent(AboutPage),
    exact: true
}, {
    path: '/contact',
    component: SidebarComponent(ContactPage),
    exact: true
}, {
    path: '/home',
    component: SidebarComponent(HomePage),
    exact: true
}, {
    path: '/member',
    component: SidebarComponent(MemberPage),
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
