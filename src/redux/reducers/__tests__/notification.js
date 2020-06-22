import reducer from "../notification";
import * as ActionTypes from "../../actions/actionTypes";

const initialState = { open: false, message: "" };

describe("notification reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SHOW_NOTIFICATION", () => {
    const action = {
      type: ActionTypes.SHOW_NOTIFICATION,
      message: "notice me!"
    };
    expect(reducer(undefined, action)).toEqual({
      open: true,
      message: "notice me!"
    });
  });

  it("should handle CLOSE_NOTIFICATION", () => {
    const action = {
      type: ActionTypes.CLOSE_NOTIFICATION
    };
    expect(reducer({}, action)).toEqual({ open: false, message: "" });
  });
});
