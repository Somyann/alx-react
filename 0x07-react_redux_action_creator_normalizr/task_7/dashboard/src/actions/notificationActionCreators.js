import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";


export const boundmarkAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});
export const boundSetNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

