// @flow
import { combineReducers } from "redux";
import todos from "./todos";
import mode from "./mode";
import currentTodoId from "./currentTodoId";
import notification from "./notification";
import filter from "./filter";

// $FlowFixMe
export default combineReducers({
  filter,
  mode,
  notification,
  currentTodoId,
  todos,
});
