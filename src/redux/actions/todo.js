// @flow
import type { Id, TodoActions } from '../../types/mode';
import { SET_TODO } from './actionTypes';
import { getTodoById } from '../selectors';

export const setTodo = (id: Id): TodoActions => {
	return (dispatch, getState) => {
		const todos = getState().todos;
		const todo = getTodoById(todos, id);
		return dispatch({ type: SET_TODO, todo });
	};
};
