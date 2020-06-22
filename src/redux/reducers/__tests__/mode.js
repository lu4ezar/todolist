import reducer from "../mode";
import * as ActionTypes from "../../actions/actionTypes";

const initialState = "list";

describe("mode reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_MODE", () => {
    const action = {
      type: ActionTypes.SET_MODE,
      mode: "form"
    };
    expect(reducer(initialState, action)).toEqual("form");
  });

  it("should handle SET_MODE", () => {
    const action = {
      type: ActionTypes.SET_MODE,
      mode: "edit"
    };
    expect(reducer(initialState, action)).toEqual("edit");
  });

  it("should handle SET_MODE", () => {
    const action = {
      type: ActionTypes.SET_MODE,
      mode: "view"
    };
    expect(reducer(initialState, action)).toEqual("view");
  });
});
