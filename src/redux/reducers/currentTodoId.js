// @flow
import { DROP_ID, SET_ID } from "../actions/actionTypes";
import type {
  CurrentTodoIdAction,
  CurrentTodoId,
} from "../../types/currentTodoId";

const currentTodoId = (
  state: CurrentTodoId = null,
  action: CurrentTodoIdAction
): CurrentTodoId => {
  switch (action.type) {
    case SET_ID:
      return action.payload;
    case DROP_ID:
      return null;
    default:
      return state;
  }
};

export default currentTodoId;
