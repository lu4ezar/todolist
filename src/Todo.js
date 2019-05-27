// @flow
import type {
	Id,
	Task,
	Description,
	Priority,
	Status,
	CreationDate,
	Time,
	Todo as TodoType
} from './types/todos';

export default class Todo {
	id: Id;
	task: Task;
	description: Description;
	priority: Priority;
	status: Status;
	date: CreationDate;
	time: Time;
	constructor({
		id,
		task = '',
		description = '',
		priority = 'normal',
		status = 'active',
		date = '',
		time = ''
	}: TodoType = {}) {
		this.id = id;
		this.task = task;
		this.description = description;
		this.priority = priority;
		this.status = status;
		this.date = date;
		this.time = time;
	}
}
