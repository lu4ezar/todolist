import reducer from "../currentTodoId";
import * as ActionTypes from "../../actions/actionTypes";

const setAction = {
  type: ActionTypes.SET_ID,
  payload: 5,
};

const dropAction = {
  type: ActionTypes.DROP_ID,
};

describe("todo reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it("should handle SET_ID", () => {
    const expectedState = 5;
    expect(reducer({}, setAction)).toEqual(expectedState);
    setAction.payload = 6;
    expect(reducer(expectedState, setAction)).toEqual(6);
  });
  it("should handle DROP_ID", () => {
    const expectedState = null;
    expect(reducer({}, dropAction)).toEqual(expectedState);
  });
});
