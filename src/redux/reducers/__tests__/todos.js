import { todos } from '../todos';
import * as ActionTypes from '../../actions/actionTypes';

const todo1 = {
	task: 'hope',
	description: 'wisdom'
};
const todo2 = {
	task: 'bliss',
	description: 'glory'
};
const someState = [
	{
		id: 0,
		...todo1
	}
];
const finalState = [
	{
		id: 1,
		...todo2
	},
	{
		id: 0,
		...todo1
	}
];

describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(todos(undefined, {})).toEqual([]);
	});

	it('should handle ADD_TODO', () => {
		const type = ActionTypes.ADD_TODO;
		const action1 = {
			type,
			todo: todo1
		};
		const action2 = {
			type,
			todo: todo2
		};
		expect(todos([], action1)).toEqual(someState);
		expect(todos(someState, action2)).toEqual(finalState);
	});

	it('should handle DELETE_TODO', () => {
		const action1 = {
			type: ActionTypes.DELETE_TODO,
			id: 1
		};
		const action2 = {
			type: ActionTypes.DELETE_TODO,
			id: 0
		};
		expect(todos(finalState, action1)).toEqual(someState);
		expect(todos(someState, action2)).toEqual([]);
	});

	it('should handle TOGGLE_TODO', () => {
		const todo = {
			id: 0,
			task: 'task',
			description: 'desc'
		};
		const action = {
			type: ActionTypes.TOGGLE_TODO,
			id: 0
		};
		expect(todos([todo], action)).toEqual([
			{ id: 0, task: 'task', description: 'desc', status: 'completed' }
		]);
	});

	it('should handle UPDATE_TODO', () => {
		const todo = {
			id: 0,
			task: 'updatedTask',
			description: 'updatedDescription'
		};
		const action = {
			type: ActionTypes.UPDATE_TODO,
			todo
		};
		expect(todos(someState, action)).toEqual([
			{
				id: 0,
				task: 'updatedTask',
				description: 'updatedDescription'
			}
		]);
	});

	it('should handle REORDER_TODO', () => {
		const result = {
			source: {
				index: 1
			},
			destination: {
				index: 0
			}
		};
		const action = {
			type: ActionTypes.REORDER_TODO,
			result
		};
		expect(todos(finalState, action)).toEqual([finalState[0], finalState[1]]);
	});
});
