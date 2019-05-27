// @flow
import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	REORDER,
	UPDATE_TODO
} from '../actions/actionTypes';
import type {
	Todo as TodoType,
	Todos,
	Id,
	TodosAction
} from '../../types/todos';
import Todo from '../../Todo';
import { getTodosIdArray } from '../selectors';
import type { DropResult } from 'react-beautiful-dnd';
import undoable from 'redux-undo';

const todos = (state: Todos = [], action: TodosAction): Todos => {
	switch (action.type) {
		case ADD_TODO:
			return [createTodo(state, action.todo), ...state];
		case TOGGLE_TODO:
			return toggleTodo(state, action.id);
		case DELETE_TODO:
			return deleteTodo(state, action.id);
		case UPDATE_TODO:
			return updateTodo(state, action.todo);
		case REORDER:
			return onDragEnd(state, action.result);
		default:
			return state;
	}
};

/*
		ADD_TODO
*/
const createTodo = (state: Todos, todo: TodoType): TodoType => {
	todo.id = getUniqueId(state);
	return new Todo({ ...todo });
};
const getUniqueId = (state): number => {
	const idArray = getTodosIdArray(state);
	for (let i = 0; i < idArray.length; i++) {
		if (!idArray.includes(i)) {
			return i;
		}
	}
	return idArray.length;
};
/*
	TOGGLE_TODO
*/
const toggleTodo = (todos: Todos, id: Id): Todos =>
	todos.map(
		(todo: TodoType): TodoType => {
			if (todo.id === id) {
				todo.status = 'completed';
			}
			return todo;
		}
	);
/*
	DELETE_TODO
*/
const deleteTodo = (todos: Todos, id: Id): Todos =>
	todos.filter(todo => todo.id !== id);

/*
	UPDATE_TODO
*/
const updateTodo = (todos: Todos, todo: TodoType): Todos =>
	todos.map(
		(arrayItem: TodoType): TodoType =>
			arrayItem.id === todo.id ? todo : arrayItem
	);

/*
	REORDER
*/
const onDragEnd = (state: Todos, result: DropResult): Todos => {
	const { source, destination } = result;
	if (!destination) {
		return state;
	}
	if (source.index === destination.index) {
		return state;
	}
	const list = reorder(state, source.index, destination.index);
	return list;
};

const reorder = (todos, startIndex, endIndex) => {
	const arr = [...todos];
	const [removed] = arr.splice(startIndex, 1);
	arr.splice(endIndex, 0, removed);
	return arr;
};

export default undoable(todos);
