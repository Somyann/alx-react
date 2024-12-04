import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";


export const boundmarkAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});
export const boundSetNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});
export const FetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});
export const markAsRead = (index) =>  ({
  type: MARK_AS_READ,
  index,
});
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
}); 



