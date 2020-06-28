// @flow

export type Notification = string | null;

export type NotificationActionTypes = "SET_NOTIFICATION" | "DROP_NOTIFICATION";

export type SetNotificationAction = {|
  type: "SET_NOTIFICATION",
  payload: Notification,
|};

export type DropNotificationAction = {|
  type: "DROP_NOTIFICATION",
|};

export type NotificationAction = SetNotificationAction | DropNotificationAction;

export type NotificationState = {| +notification: Notification |};
