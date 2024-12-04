import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { map} from 'immutable';


const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('isUserLoggedIn', true).set('user', action.user);

    case LOGOUT:
      return state.set( 'isUserLoggedIn', false).set('user', {});

    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
    default:
      return state;
  }
};


export default {initialState, uiReducer};