import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));
notificationsRoot.render(
  <React.StrictMode>
    <root-notifications />
  </React.StrictMode>
);
reportWebVitals();
