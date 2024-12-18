import React from 'react';
import logo from './Holberton.logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notification from './Notifications';
import Header from '../Header/Header';
import Login from './Login/Login';
import Footer from '../Footer/Footer';


function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

 