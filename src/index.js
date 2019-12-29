import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

function myReducer(state = 0, action) {
    if(action.type === "INCREMENT") {
        return state + 1;
    }
    return state;
}

const store = createStore(myReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
