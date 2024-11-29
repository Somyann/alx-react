
import * as notificationsData from '../notifications.json';

function getAllNotificationsByUser(userId) {
  
  return notificationsData.default.filter(notification => notification.author.id === userId);
}
export default getAllNotificationsByUser;