// @flow
import type { Todo, TodoAction } from '../../types/mode';
import { SET_TODO } from './actionTypes';

export const setTodo = (todo: Todo): TodoAction => ({ type: SET_TODO, todo });
