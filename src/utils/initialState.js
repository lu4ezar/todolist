// @flow
import { loadState } from './localStorage';
import Todo from '../Todo';
import type { Todo as TodoType, Todos, TodosState } from '../types/todos';
import { isExpired, stringToDate } from '../utils/moment';

/*
*
state = {
	todos: [],
	todo: null,
	mode: Mode
}
*
*/

export const getInitialState = (): TodosState => {
	let initialState;
	try {
		initialState = loadState();
		if (!initialState) {
			throw new Error('localStorage is empty');
		}
		normalizeLoadedData(initialState);
	} catch (err) {
		console.log(
			"couldn't get initial state from localStorage: " + err.message
		);
		initialState = getTodos(3);
	}
	return { todos: initialState, mode: 'list' };
};

// get fake data
const getTodos = (n: number): Todos => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		const todo = new Todo();
		todo.task = 'test todo ' + i;
		todo.description = 'test description ' + i;
		todo.id = i;
		arr.push(todo);
	}
	return arr;
};

// - check if todo is expired
// - convert date and time to Date
const normalizeLoadedData = (data: Todos): Todos =>
	data.map(
		(todo: TodoType): TodoType => {
			if (todo.status !== 'completed') {
				todo.status = isExpired(todo);
			}
			if (todo.date && typeof todo.date === 'string') {
				todo.date = stringToDate(todo.date);
			}
			if (todo.time && typeof todo.time === 'string') {
				todo.time = stringToDate(todo.time);
			}
			return todo;
		}
	);
