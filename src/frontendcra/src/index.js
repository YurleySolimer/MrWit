import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/App.scss';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './routes/App';
import reducer from './reducers';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mrwit.co/api' || 'http://localhost:3000' ;
console.log(axios.defaults.baseURL);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('App')
);
