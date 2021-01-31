// @flow
import type { DropResult } from "react-beautiful-dnd";
import type { Todo } from "../generated/graphql";

export type Todos = Array<Todo>;

export type TodosState = {|
  +todos: Todos,
|};

export type TodosActions =
  | "ADD_TODO"
  | "TOGGLE_TODO"
  | "UPDATE_TODO"
  | "DELETE_TODO"
  | "REORDER";

export type TodosAction =
  | {| type: "ADD_TODO", todo: Todo |}
  | {| type: "TOGGLE_TODO", id: string |}
  | {| type: "DELETE_TODO", id: string |}
  | {| type: "UPDATE_TODO", todo: Todo |}
  | {| type: "REORDER", result: DropResult |};
