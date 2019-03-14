import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Reducers from './2.reducers';


const globalState = createStore(Reducers,{},applyMiddleware(ReduxThunk))
ReactDOM.render(<Provider store={globalState}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
