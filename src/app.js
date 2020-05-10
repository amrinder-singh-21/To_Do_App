import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {cakeReducer, iceReducer} from './redux/shop/shopReducers';
import {loopReducer} from './redux/loops/reducerLoop'
import {userReducers} from './redux/users/userReducers';
import App from './components/app';

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceReducer,
    user : userReducers,
    loop : loopReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));

