import React from 'react';
import './Notifications.css';
import './close-icon.png';
import { getLatestNotification } from './utils';
function Notifications() {
  const handleButtonClick = () =>{
    console.log('Close button has been clicked');
  };
  return (
    <div className="Notifications">
      <button style={{
         position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer'
      }} aria-label="Close"
      onClick={handleButtonClick}>
      <img src='close-icon.png'alt='close icon'/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>

     
    </div>
  );
}

export {Notifications};