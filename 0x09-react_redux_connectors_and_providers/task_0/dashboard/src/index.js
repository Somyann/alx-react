import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import uiReducer from './reducers/uiReducer';

// Create the Redux store
const store = createStore(uiReducer);

// Render the main App component wrapped with the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
