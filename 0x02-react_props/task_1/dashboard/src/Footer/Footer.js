import React from 'react';
import './Footer.css';

function Footer() {
  return (
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
        <p>{getFooterCopy(isIndex)}</p>
        <p>{getFullYear()}</p>
      </div>
  );
}

export default Footer;
 