import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer, initialState } from "../store/reducer";
import App from './containers/App';
import './scss/App';

declare global {
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render( 
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
document.getElementById("root"));