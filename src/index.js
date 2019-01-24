import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleWare, { END } from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css'
import Main from './Main'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleWare();

// todo use preloaded state send by server
const store = createStore(
    rootReducer, 
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

ReactDOM.hydrate( // todo use hydrate
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);