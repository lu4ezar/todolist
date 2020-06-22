import { setTodo } from "../currentTodoId";
import * as types from "../actionTypes";

describe("todo actions", () => {
  it("setTodo should create an action to set todo id", () => {
    const id = 5;
    const expectedAction = {
      type: types.SET_ID,
      id
    };
    expect(setTodo(id)).toEqual(expectedAction);
  });
});
