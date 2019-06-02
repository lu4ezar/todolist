// @flow
import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from '../actions/actionTypes';
import type {
	NotificationState,
	NotificationAction
} from '../../types/notification';

const notification = (
	state: NotificationState = { open: false, message: '' },
	action: NotificationAction
): NotificationState => {
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
