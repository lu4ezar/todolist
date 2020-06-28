// @flow
import { createSelector } from "reselect";
import type { Id, Todo as TodoType } from "../types/todo";
import type { Todos } from "../types/todos";
import type { Filter } from "../types/filter";
import type { State } from "../types";

/*
get current list, todo's id, filter state:
*/
const getTodos = (state: State): Todos => state.todos.present;

const getId = (state: State): Id => state.todo;

const getFilter = (state: State): Filter => state.filter;

/*
get todo by its id
*/
export const getTodoById = createSelector(
  [getTodos, getId],
  (todos: Todos, id: Id): ?TodoType => todos.find((todo) => todo.id === id)
);

/*
get number of todos with status 'completed' and 'expired
*/
export const getCompletedCount = createSelector(
  getTodos,
  (todos: Todos): number =>
    todos.filter((todo) => todo.status === "completed").length
);

export const getExpiredCount = createSelector(
  getTodos,
  (todos: Todos): number =>
    todos.filter((todo) => todo.status === "expired").length
);

const filterTodo = (todo: TodoType, filter: Filter): boolean => {
  const {
    priority: { status: priorityFilterEnabled, value: priorityFilter },
    completed: { status: completedFilterEnabled, value: completedFilter },
    expired: { status: expiredFilterEnabled, value: expiredFilter },
  } = filter;
  const { priority, status } = todo;
  let result = false;
  if (priorityFilterEnabled) {
    if (!priorityFilter.includes(priority)) {
      return false;
    }
    result = true;
  }
  if (completedFilterEnabled) {
    if (status === "completed") {
      return completedFilter;
    }
    result = !completedFilter;
  }
  if (expiredFilterEnabled) {
    if (status === "expired") {
      return expiredFilter;
    }
    result = !expiredFilter;
  }
  return result;
};

const filterList = (list, filter) => {
  if (
    filter.priority.status ||
    filter.completed.status ||
    filter.expired.status
  ) {
    return list.filter((todo) => filterTodo(todo, filter));
  }
  return list;
};

export const getFilteredList = createSelector(
  [getTodos, getFilter],
  (todos, filter) => (filter.master.status ? filterList(todos, filter) : todos)
);
