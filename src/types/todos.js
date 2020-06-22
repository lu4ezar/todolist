// @flow
import type { DropResult } from "react-beautiful-dnd";
import type { Todo, Id } from "./todo";

export type Todos = Array<Todo>;

export type TodosState = $ReadOnly<{
  todos: Todos
}>;

export type TodosStateWithHistory = $ReadOnly<{
  todos: {
    past: Todos,
    present: Todos,
    future: Todos
  }
}>;

export type TodoAction =
  | "ADD_TODO"
  | "TOGGLE_TODO"
  | "UPDATE_TODO"
  | "DELETE_TODO"
  | "REORDER";

export type TodosAction =
  | { +type: "ADD_TODO", +todo: Todo }
  | { +type: "TOGGLE_TODO", +id: Id }
  | { +type: "DELETE_TODO", +id: Id }
  | { +type: "UPDATE_TODO", +todo: Todo }
  | { +type: "REORDER", +result: DropResult };
