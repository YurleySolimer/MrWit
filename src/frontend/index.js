import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/App.scss';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

import App from './routes/App';

const store = createStore(
  reducer,
  {},
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('App')
);
