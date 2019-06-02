// @flow
import { createSelector } from 'reselect';
import type { Id, Todo as TodoType, Todos } from '../types/todos';
import type { State } from '../types';

const getTodos = (state: State) => state.todos.present;

const getId = (state: State) => state.todo;

export const getTodoById = createSelector(
	[getTodos, getId],
	(todos: Todos, id: Id): ?TodoType => todos.find(todo => todo.id === id)
);

export const getTodosIdArray = createSelector(
	getTodos,
	(todos: Todos): Array<Id> => todos.map((todo: TodoType): Id => todo.id)
);
