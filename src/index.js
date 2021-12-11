import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { rootReducers } from './store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


const store = createStore(rootReducers, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
