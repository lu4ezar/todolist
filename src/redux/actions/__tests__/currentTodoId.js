import { setTodo, dropTodo } from "../currentTodoId";
import * as types from "../actionTypes";

describe("todo actions", () => {
  it("setTodo should create an action to set todo id", () => {
    const id = 5;
    const expectedAction = {
      type: types.SET_ID,
      payload: id,
    };
    expect(setTodo(id)).toEqual(expectedAction);
  });
  it("dropTodo should create an action to set todo id equal to null", () => {
    const expectedAction = {
      type: types.DROP_ID,
    };
    expect(dropTodo()).toEqual(expectedAction);
  });
});
