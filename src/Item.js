class Item {
	constructor(task, desc) {
		this.task = task || "";
		this.description = desc || "";
		this.priority = "normal";
		this.status = "";
		this.date = "";
		this.time = "";
	}
}

export default Item;
