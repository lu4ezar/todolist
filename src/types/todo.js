// @flow
export type Id = number;

export type Task = string;

export type Description = string;

export type Priority = string;

export type Status = string;

export type Time = Date;

export type Todo = {
	+id: Id,
	task: Task,
	description: Description,
	[priority: string]: Priority,
	status: Status,
	date: ?Date,
	time: ?Date
};

export type Todos = Array<Todo>;

export type TodoAction = 'ADD_ITEM' | 'UPDATE_ITEM' | 'DELETE_ITEM';
