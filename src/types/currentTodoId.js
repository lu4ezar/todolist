// @flow
import type { Id } from './todos';

export type TodoActions = 'SET_ID';

export type TodoState = {
	+todo: Id
};

export type TodoAction = { type: TodoActions, id: ?Id };
