import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {messageReducer} from './redux/reducer'
import '../src/styles/style.css'
import AppWrapper from './components/appWrapper';

const store = createStore(messageReducer,composeWithDevTools());
ReactDOM.render(<Provider store={store}><AppWrapper/></Provider>, document.getElementById('app'));

