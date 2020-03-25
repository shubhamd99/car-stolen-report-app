import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer, initialState } from "./store/reducer";
import App from './containers/App';
import './scss/App';

declare global {
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
);

render( 
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
document.getElementById("root"));