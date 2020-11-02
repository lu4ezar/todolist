import reducer from "../notification";
import * as ActionTypes from "../../actions/actionTypes";

const initialState = null;

describe("notification reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_NOTIFICATION", () => {
    const action = {
      type: ActionTypes.SET_NOTIFICATION,
      payload: "notice me!",
    };
    expect(reducer(undefined, action)).toEqual("notice me!");
  });

  it("should handle DROP_NOTIFICATION", () => {
    const action = {
      type: ActionTypes.DROP_NOTIFICATION,
    };
    expect(reducer({}, action)).toBeNull();
  });
});
