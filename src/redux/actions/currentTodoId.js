// @flow
import type { TodoAction, Id } from "../../types/todo";

import { SET_ID } from "./actionTypes";

const setTodo = (id: ?Id): TodoAction => ({
  type: SET_ID,
  id,
});

export default setTodo;
