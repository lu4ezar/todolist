// @flow
export default class Item {
	id: ?number;
	task: string;
	description: string;
	priority: string;
	status: string;
	date: ?Date;
	time: ?Date;
	constructor(task: string = '', desc: string = '') {
		this.id = null;
		this.task = task;
		this.description = desc;
		this.priority = 'normal';
		this.status = '';
		this.date = null;
		this.time = null;
	}
}
