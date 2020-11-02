// @flow
import { createSelector } from "reselect";
import { TodoStatusValues } from "../generated/graphql";
import type { Todo as TodoType } from "../generated/graphql";
import type { CurrentTodoId } from "../types/currentTodoId";
import type { Todos } from "../types/todos";
import type { Filter } from "../types/filter";
import type { State } from "../types";

const getTodos = (state: State): Todos => state.todos.present;

const getId = (state: State): ?CurrentTodoId => state.currentTodoId;

const getFilter = (state: State): Filter => state.filter;

export const getTodoById: (State) => ?TodoType = createSelector(
  [getTodos, getId],
  (todos: Todos, id: ?string): ?TodoType => todos.find((t) => t.id === id)
);

export const getCompletedCount: (State) => number = createSelector(
  getTodos,
  (todos: Todos): number =>
    todos.filter((todo) => todo.status === TodoStatusValues.Completed).length
);

export const getExpiredCount: (State) => number = createSelector(
  getTodos,
  (todos: Todos): number =>
    todos.filter((todo) => todo.status === TodoStatusValues.Expired).length
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
    if (status === TodoStatusValues.Completed) {
      return completedFilter;
    }
    result = !completedFilter;
  }
  if (expiredFilterEnabled) {
    if (status === TodoStatusValues.Expired) {
      return expiredFilter;
    }
    result = !expiredFilter;
  }
  return result;
};

export const filterList = (list: Todos, filter: Filter): Todos => {
  if (
    filter.priority.status ||
    filter.completed.status ||
    filter.expired.status
  ) {
    return list.filter((todo) => filterTodo(todo, filter));
  }
  return list;
};

export const getFilteredList: (state: State) => Todos = createSelector(
  [getTodos, getFilter],
  (todos, filter): Todos =>
    filter.master.status ? filterList(todos, filter) : todos
);
