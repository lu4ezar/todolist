// @flow
import { createSelector } from 'reselect';
import type { Id, Todo as TodoType, Todos } from '../types/todos';
import type { State } from '../types';

const todosSelector = (state: State) => state.todos;

export const getTodoById = createSelector(
	todosSelector,
	(todos: Todos, id: Id): ?TodoType => todos.find(todo => todo.id === id)
);

export const getTodosIdArray = createSelector(
	todosSelector,
	(todos: Todos): Array<Id> => todos.map((todo: TodoType): Id => todo.id)
);
