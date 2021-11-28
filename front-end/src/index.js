import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore, compose} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

//store -- globalized state
const store = createStore(allReducers, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//action -- describes what we want to do but does not perform the action


//reducer -- based on the action, we change state


//dispatch -- 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

