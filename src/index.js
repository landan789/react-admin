import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './pages/App';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

import ROUTERS_CFG from './configs/routers';

const routes = [{
    path: ROUTERS_CFG.MEMBER,
    component: App,
    exact: true
}];

ReactDOM.render(
    <BrowserRouter>
        <Switch>
        {routes.map((route) => (
            <Route key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component} />
        ))}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
// registerServiceWorker();
