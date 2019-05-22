// @flow
import type { Id, Todos, TodoAction } from '../../types/mode';
import { SET_TODO } from './actionTypes';
import { getTodoById } from '../selectors';
import type { Dispatch, State } from '../../types';

export const setTodo = (id: Id): TodoAction => {
	return (dispatch: Dispatch, getState: State) => {
		const todos: Todos = getState().todos;
		const todo = getTodoById(todos, id);
		dispatch({ type: SET_TODO, todo });
	};
};
