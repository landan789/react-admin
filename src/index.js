import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import indexStore from './stores/index';

import 'semantic-ui-css/semantic.min.css';

import './styles/index.css';

// import registerServiceWorker from './registerServiceWorker';

import IndexRouter from './routers/Index';

ReactDOM.render(
    <Provider store={indexStore}>
        <IndexRouter/>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();