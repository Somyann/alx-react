import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("uiActionCreators", () => {
  it("should return the correct action for login", () => {
    const result = login("test@exanple", "password");
    expect(result).toEqual({ type: LOGIN, user: { email: "test@exanple", password: "password" } });
  });
  test ("should return the correct action for logout", () => {
    const result = logout();
    expect(result).toEqual({ type: LOGOUT });
  });
  test ("should return the correct action for displayNotificationDrawer", () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });
  test ("should return the correct action for hideNotificationDrawer", () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});