// @flow
import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from '../actions/actionTypes';
import type {
	Notification,
	NotificationAction
} from '../../types/notification';

const notification = (
	state: Notification = { open: false, message: '' },
	action: NotificationAction
): NotificationAction => {
	switch (action.type) {
		case SHOW_NOTIFICATION:
			return { open: true, message: action.message };
		case CLOSE_NOTIFICATION:
			return { open: false, message: '' };
		default:
			return state;
	}
};

export default notification;
