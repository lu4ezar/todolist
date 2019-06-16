import * as actions from '../todos';
import * as types from '../actionTypes';

const id = 5;
const task = 'task';
const description = 'description';
const todo = {
	id,
	task,
	description
};

describe('todos actions', () => {
	it('addTodo should create an action to add todo', () => {
		const expectedAction = {
			type: types.ADD_TODO,
			todo
		};
		expect(actions.addTodo(todo)).toEqual(expectedAction);
	});

	it('deleteTodo should create an action to delete todo', () => {
		const expectedAction = {
			type: types.DELETE_TODO,
			id
		};
		expect(actions.deleteTodo(id)).toEqual(expectedAction);
	});

	it('toggleTodo should create an action to toggle todo status', () => {
		const expectedAction = {
			type: types.TOGGLE_TODO,
			id
		};
		expect(actions.toggleTodo(id)).toEqual(expectedAction);
	});

	it('updateTodo should create an action to update todo', () => {
		const expectedAction = {
			type: types.UPDATE_TODO,
			todo
		};
		expect(actions.updateTodo(todo)).toEqual(expectedAction);
	});

	it('reorderTodos should create an action to reorder todo list', () => {
		const result = {
			source: 1,
			destination: 2
		};
		const expectedAction = {
			type: types.REORDER,
			result
		};
		expect(actions.reorderTodos(result)).toEqual(expectedAction);
	});
});
