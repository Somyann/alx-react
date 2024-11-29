
import * as notificationsData from '../notifications.json';
import { schema } from 'normalizr';

function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author.id === userId);
}
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export{ getAllNotificationsByUser, user, message, notification};
