// @flow
import { SET_NOTIFICATION, DROP_NOTIFICATION } from "../actions/actionTypes";
import type {
  Notification,
  NotificationAction,
} from "../../types/notification";

const notification = (
  state: Notification = null,
  action: NotificationAction
): Notification => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.payload;
    case DROP_NOTIFICATION:
      return null;
    default:
      // eslint-disable-next-line no-unused-expressions
      (action: empty);
      return state;
  }
};

export default notification;
