import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import configureStore from './configureStore';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
