// @flow
import type { TodoAction } from '../../types/currentTodoId';
import type { Id } from '../../types/todos';

import { SET_ID } from './actionTypes';

export const setTodo = (id: ?Id): TodoAction => ({
	type: SET_ID,
	id
});
