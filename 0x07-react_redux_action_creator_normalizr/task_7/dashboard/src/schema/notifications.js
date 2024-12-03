import * as notificationsData from '../notifications.json';
import { schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const normalizedData = normalize(notificationsData.default, [notification]);

function getAllNotificationsByUser(userId) {
  const { notifications, users } = normalizedData.entities;
  const userNotifications = Object.values(notifications).filter(
    (notification) => notification.author === userId
  );
  return userNotifications.map((notification) => ({
    id: notification.id,
    context: normalizedData.entities.messages[notification.context],
    author: notification.author,
  }));
}
export{ getAllNotificationsByUser, user, message, notification};
