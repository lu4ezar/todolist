// @flow
import { createSelector } from "reselect";
import { TodoStatusValues } from "../generated/graphql";
import type { Todo as TodoType } from "../generated/graphql";
import type { CurrentTodoId } from "../types/currentTodoId";
import type { Todos } from "../types/todos";
import type { State } from "../types";

const getTodos = (state: State): Todos => state.todos.present;

const getId = (state: State): ?CurrentTodoId => state.currentTodoId;

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
