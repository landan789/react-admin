import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import './index.css';

// import registerServiceWorker from './registerServiceWorker';

import SidebarCpn from './components/Sidebar';

ReactDOM.render(
    <SidebarCpn/>,
    document.getElementById('root')
);
// registerServiceWorker();
