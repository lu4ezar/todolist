// @flow
export type NotificationActions = 'SHOW_NOTIFICATION' | 'CLOSE_NOTIFICATION';

export type NotificationState = {
	+open: boolean,
	+message?: string
};

export type NotificationAction = {
	type: NotificationActions,
	message?: string
};
