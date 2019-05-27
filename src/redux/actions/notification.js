// @flow
import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from './actionTypes';
import type { NotificationAction } from '../../types/notification';

export const showMessage = (message: string): NotificationAction => ({
	type: SHOW_NOTIFICATION,
	message
});

export const closeMessage = (): NotificationAction => ({
	type: CLOSE_NOTIFICATION
});
