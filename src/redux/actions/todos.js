// @flow
import type { DropResult } from "react-beautiful-dnd";
import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  REORDER,
} from "./actionTypes";
import type { Todo } from "../../generated/graphql";
import type { TodosAction } from "../../types/todos";

export const addTodo = (todo: Todo): TodosAction => ({
  type: ADD_TODO,
  todo,
});

export const deleteTodo = (id: string): TodosAction => ({
  type: DELETE_TODO,
  id,
});

export const toggleTodo = (id: string): TodosAction => ({
  type: TOGGLE_TODO,
  id,
});

export const updateTodo = (todo: Todo): TodosAction => ({
  type: UPDATE_TODO,
  todo,
});

export const reorderTodos = (result: DropResult): TodosAction => ({
  type: REORDER,
  result,
});
