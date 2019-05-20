// @flow
import type { Id, Todo as TodoType, Todos } from '../types/todos';

export const getTodosIdArray = (state: Todos): Array<Id> =>
	state.map(todo => console.log(todo) || todo.id);

export const getTodoById = (todos: Todos, id: Id): ?TodoType =>
	todos.find(todo => todo.id === id);
