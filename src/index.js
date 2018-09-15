import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import './styles/index.css';

// import registerServiceWorker from './registerServiceWorker';

import IndexRouter from './routers/Index';

ReactDOM.render(
    <IndexRouter/>,
    document.getElementById('root')
);
// registerServiceWorker();