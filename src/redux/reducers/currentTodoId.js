// @flow
import { SET_ID } from '../actions/actionTypes';
import type { TodoAction, Id } from '../../types/todo';

const currentTodoId = (state: ?Id = null, action: TodoAction): ?Id => {
	switch (action.type) {
		case SET_ID:
			return action.id;
		default:
			return state;
	}
};

export default currentTodoId;
