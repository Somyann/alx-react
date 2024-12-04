import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const boundlogin = (email, password) => ({
  type: LOGIN,
  user: {email, password},
});
export const boundlogout = () => ({
  type: LOGOUT,
});
export const bounddisplayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});
export const boundhideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});
