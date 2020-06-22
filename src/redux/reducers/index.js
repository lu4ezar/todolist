// @flow
import { combineReducers } from "redux";
import todos from "./todos";
import mode from "./mode";
import todo from "./currentTodoId";
import notification from "./notification";
import filter from "./filter";

export default combineReducers({
  filter,
  mode,
  notification,
  todo,
  todos
});
