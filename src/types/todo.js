export type TodoActions = 'SET_TODO';

export type TodoState = $ReadOnly<{
	id: Id,
	task: Task,
	description: Description,
	[priority: string]: Priority,
	status: Status,
	date: CreationDate,
	time: Time
}>;

export type TodoAction = { type: TodoActions, todo: Todo };
