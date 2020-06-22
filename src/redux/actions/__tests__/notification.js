import * as actions from "../notification";
import * as types from "../actionTypes";

describe("notification actions", () => {
  it("showMessage should create an action to show message", () => {
    const message = "helllo!";
    const expectedAction = {
      type: types.SHOW_NOTIFICATION,
      message
    };
    expect(actions.showMessage(message)).toEqual(expectedAction);
  });

  it("closeMessage should create an action to close message", () => {
    const expectedAction = {
      type: types.CLOSE_NOTIFICATION
    };
    expect(actions.closeMessage()).toEqual(expectedAction);
  });
});
