import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe("notificationActionCreators", () => {
  it ('should return the correct action for markAsRead', () => {
    const result = markAsRead(1);
    expect(result).toEqual({ type: MARK_AS_READ, index: 1 });
  }
  );
  it ('should return the correct action for setNotificationFilter', () => {
    const result = setNotificationFilter('DEFAULT');
    expect(result).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
  }
  );
});

