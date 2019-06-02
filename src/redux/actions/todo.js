// @flow
import type { Todo as TodoType, TodoAction } from '../../types/todo';

import { SET_TODO } from './actionTypes';

export const setTodo = (todo: ?TodoType): TodoAction => ({
	type: SET_TODO,
	todo
});
