import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore} from "redux";
import combinedReducer from './redux/reducers/reducers.js';
let store=createStore(combinedReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);