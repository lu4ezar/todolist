// @flow
import type { DropResult } from 'react-beautiful-dnd';

export type Id = number;

export type Task = string;

export type Description = string;

export type Priority = 'low' | 'normal' | 'high';

export type Status = 'active' | 'completed' | 'expired';

export type CreationDate = string;

export type Time = string;

export type Todo = {
	id: Id,
	task: Task,
	description: Description,
	[priority: string]: Priority,
	status: Status,
	date: CreationDate,
	time: Time
};

export type Todos = Array<Todo>;

export type TodosState = $ReadOnly<{
	todos: Todos
}>;

export type TodosStateWithHistory = $ReadOnly<{
	todos: {
		past: Todos,
		present: Todos,
		future: Todos
	}
}>;

export type TodoAction =
	| 'ADD_TODO'
	| 'TOGGLE_TODO'
	| 'UPDATE_TODO'
	| 'DELETE_TODO'
	| 'REORDER';

export type TodosAction =
	| { +type: 'ADD_TODO', +todo: Todo }
	| { +type: 'TOGGLE_TODO', +id: Id }
	| { +type: 'DELETE_TODO', +id: Id }
	| { +type: 'UPDATE_TODO', +todo: Todo }
	| { +type: 'REORDER', +result: DropResult };
