// @flow
import { createSelector } from 'reselect';
import type { Id, Todo as TodoType } from '../types/todo';
import type { Todos } from '../types/todos';
import type { Filter } from '../types/filter';
import type { State } from '../types';

/*
get current list, todo's id, filter state:
*/
const getTodos = (state: State): Todos =>
	state.todos ? state.todos.present : state;

const getId = (state: State): Id => state.todo;

const getFilter = (state: State): Filter => state.filter;

/*
get todo by its id
*/
export const getTodoById = createSelector(
	[getTodos, getId],
	(todos: Todos, id: Id): ?TodoType => todos.find(todo => todo.id === id)
);

/*
get array of all present todo ids
*/
export const getTodosIdArray = createSelector(
	getTodos,
	(todos: Todos): Array<Id> => todos.map((todo: TodoType): Id => todo.id)
);

/*
get number of todos with status 'completed' and 'expired
*/
export const getCompletedCount = createSelector(
	getTodos,
	(todos: Todos): number =>
		todos.filter(todo => todo.status === 'completed').length
);

export const getExpiredCount = createSelector(
	getTodos,
	(todos: Todos): number =>
		todos.filter(todo => todo.status === 'expired').length
);

/*
filter list
*/
export const getFilteredList = createSelector(
	[getTodos, getFilter],
	(todos, filter) => (filter.filterOn ? filterList(todos, filter) : todos)
);

const filterList = (list, filter) => {
	if (
		filter.priorityFilterEnabled ||
		filter.completedFilterEnabled ||
		filter.expiredFilterEnabled
	) {
		return list.filter(todo => filterTodo(todo, filter));
	}
	return list;
};

const filterTodo = (todo: TodoType, filter): boolean => {
	const {
		priorityFilterEnabled,
		priorityFilter,
		completedFilterEnabled,
		completedFilter,
		expiredFilterEnabled,
		expiredFilter
	} = filter;
	let { priority, status } = todo;
	let result = false;
	if (priorityFilterEnabled) {
		if (!priorityFilter.includes(priority)) {
			return false;
		}
		result = true;
	}
	if (completedFilterEnabled) {
		if (status === 'completed') {
			return completedFilter;
		}
		result = !completedFilter;
	}
	if (expiredFilterEnabled) {
		if (status === 'expired') {
			return expiredFilter;
		}
		result = !expiredFilter;
	}
	return result;
};
