// @flow
import { SET_NOTIFICATION, DROP_NOTIFICATION } from "./actionTypes";
import type {
  Notification,
  SetNotificationAction,
  DropNotificationAction,
} from "../../types/notification";

export const showMessage = (payload: Notification): SetNotificationAction => ({
  type: SET_NOTIFICATION,
  payload,
});

export const closeMessage = (): DropNotificationAction => ({
  type: DROP_NOTIFICATION,
});
