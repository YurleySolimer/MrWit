import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import App from './routes/App';
import './assets/styles/App.scss';

const initialState = {
  'user': 'client',
  'isOnline': true,
  'name': 'Luis Fernando',
  'input': {
    'name': '',
    'id': '',
    'tel': '',
    'gender': '',
    'country': '',
    'email': '',
    'password': '',
    'confirm_password': '',
  },
  'errors': {},
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('App')
);
