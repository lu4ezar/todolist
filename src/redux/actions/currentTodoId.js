// @flow
import type {
  SetCurrentTodoIdAction,
  DropCurrentTodoIdAction,
} from "../../types/currentTodoId";
import { SET_ID, DROP_ID } from "./actionTypes";

export const setTodo = (id: string): SetCurrentTodoIdAction => ({
  type: SET_ID,
  payload: id,
});

export const dropTodo = (): DropCurrentTodoIdAction => ({
  type: DROP_ID,
});
