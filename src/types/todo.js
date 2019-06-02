// @flow
import type { Todo } from './todos';

export type { Todo } from './todos';

export type TodoActions = 'SET_TODO';

export type TodoState = {
	+todo: Todo
};

export type TodoAction = { type: TodoActions, todo: ?Todo };
