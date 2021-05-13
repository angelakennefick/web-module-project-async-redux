import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './reducers';

import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


