export type NotificationActions = 'SHOW_NOTIFICATION' | 'CLOSE_NOTIFICATION';

export type NotificationAction = {
	open: boolean,
	message?: string
};
