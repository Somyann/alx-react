import React from 'react';
import NotificationItem from './NotificationItem.js';

const NotificationItem = ({ type, html, value }) => {
  return (
    <ul>
    {notifications.map((notification, index) => (
        <NotificationItem
            key={index}
            type={notification.type}
            value={notification.value}
            html={notification.html}
        />
    ))}
</ul>
  );
};

export default NotificationItem;