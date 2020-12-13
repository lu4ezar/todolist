// @flow
export const SET_ID = "SET_ID";
export const DROP_ID = "DROP_ID";
export type CurrentTodoId = string | null;

export type SetCurrentTodoIdAction = {
  type: typeof SET_ID,
  payload: CurrentTodoId,
};

export type DropCurrentTodoIdAction = {
  type: typeof DROP_ID,
};

export type CurrentTodoIdAction =
  | SetCurrentTodoIdAction
  | DropCurrentTodoIdAction;

export type CurrentTodoIdState = {
  +currentTodoId: CurrentTodoId,
};
