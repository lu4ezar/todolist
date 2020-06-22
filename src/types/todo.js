// @flow
export type Id = number;

export type Task = string;

export type Description = string;

export type Priority = "low" | "normal" | "high";

export type Status = "active" | "completed" | "expired";

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

export type TodoActions = "SET_ID";

export type TodoState = {
  +todo: Id
};

export type TodoAction = { type: TodoActions, id: ?Id };
