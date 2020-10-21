import { todos } from "../todos";
import * as ActionTypes from "../../actions/actionTypes";

const todo1 = {
  title: "hope",
  description: "wisdom",
};
const todo2 = {
  title: "bliss",
  description: "glory",
};
const someState = [
  {
    id: expect.anything(),
    ...todo1,
  },
];
const finalState = [
  {
    id: expect.anything(),
    ...todo2,
  },
  ...someState,
];

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    const type = ActionTypes.ADD_TODO;
    const action1 = {
      type,
      todo: todo1,
    };
    const action2 = {
      type,
      todo: todo2,
    };
    expect(todos([], action1)).toEqual(someState);
    expect(todos(someState, action2)).toEqual(finalState);
  });

  it("should handle UPDATE_TODO", () => {
    const todoUpdate = {
      // id: 0,
      title: "updatedTask",
      description: "updatedDescription",
    };
    const action = {
      type: ActionTypes.UPDATE_TODO,
      todo: todoUpdate,
    };
    expect(todos(finalState, action)).toEqual([todoUpdate]);
  });

  it("should handle DELETE_TODO", () => {
    const action1 = {
      type: ActionTypes.DELETE_TODO,
      id: finalState[0].id,
    };
    const action2 = {
      type: ActionTypes.DELETE_TODO,
      id: someState[0].id,
    };
    expect(todos(finalState, action1)).toEqual(someState);
    expect(todos(someState, action2)).toEqual([]);
  });

  it("should handle TOGGLE_TODO", () => {
    const todo = {
      id: 0,
      title: "task",
      description: "desc",
    };
    const action = {
      type: ActionTypes.TOGGLE_TODO,
      id: 0,
    };
    expect(todos([todo], action)).toEqual([
      {
        id: 0,
        title: "task",
        description: "desc",
        status: "completed",
      },
    ]);
  });

  it("should handle REORDER_TODO", () => {
    const result = {
      source: {
        index: 1,
      },
      destination: {
        index: 0,
      },
    };
    const action = {
      type: ActionTypes.REORDER_TODO,
      result,
    };
    expect(todos(finalState, action)).toEqual([finalState[0], finalState[1]]);
  });
});
