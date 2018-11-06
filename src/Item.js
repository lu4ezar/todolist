function Item(task, desc) {
  this.task = task || '';
  this.description = desc || '';
  this.priority = "normal";
  this.completeUntilDate = "";
  this.completeUntilTime = "";
  this.completed = false;
  this.completedAtDate = "";
  this.completedAtTime = "";
  this.isExpired = false;
}

export default Item;
