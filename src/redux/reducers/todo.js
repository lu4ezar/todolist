// @flow
import { SET_TODO } from '../actions/actionTypes';
import type { Todo } from '../../types/todos';
import type { TodoAction } from '../../types/todo';

const todo = (state: ?Todo = null, action: TodoAction) => {
	switch (action.type) {
		case SET_TODO:
			return action.todo;
		default:
			return state;
	}
};

export default todo;
