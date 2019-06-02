// @flow
import type { Todo as TodoType, TodoAction } from '../../types/mode';
import { SET_TODO } from './actionTypes';

export const setTodo = (todo: TodoType): TodoAction => ({
	type: SET_TODO,
	todo: todo
});
