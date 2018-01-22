import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {calendar, holidays} from './reducers'
import thunk from 'redux-thunk'

let store = createStore(combineReducers({
    calendar, holidays
}), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();