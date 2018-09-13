
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import SidebarComponent from './../components/Sidebar';

import CalendarPage from './../pages/Calendar';
import ChartbarPage from './../pages/Chartbar';
import ChartpiePage from './../pages/Chartpie';
import FinancePage from './../pages/Finance';
import HomePage from './../pages/Home';
import MemberPage from './../pages/Member';
import MessagePage from './../pages/Message';
import ServicePage from './../pages/Service';

const routes = [{
    path: '/home',
    component: SidebarComponent(HomePage),
    exact: true
}, {
    path: '/calendar',
    component: SidebarComponent(CalendarPage),
    exact: true
}, {
    path: '/chartbar',
    component: SidebarComponent(ChartbarPage),
    exact: true
}, {
    path: '/chartpie',
    component: SidebarComponent(ChartpiePage),
    exact: true
}, {
    path: '/finance',
    component: SidebarComponent(FinancePage),
    exact: true
}, {
    path: '/member',
    component: SidebarComponent(MemberPage),
    exact: true
}, {
    path: '/message',
    component: SidebarComponent(MessagePage),
    exact: true
}, {
    path: '/service',
    component: SidebarComponent(ServicePage),
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
