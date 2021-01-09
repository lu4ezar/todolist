import setFilter from "../filter";
import * as types from "../actionTypes";

describe("filter actions", () => {
  it("setFilter should create an action to set filter", () => {
    const payload = {
      priority: {
        status: false,
      },
    };
    const expectedAction = {
      type: types.SET_FILTER,
      payload,
    };
    expect(setFilter(payload)).toEqual(expectedAction);
  });
});