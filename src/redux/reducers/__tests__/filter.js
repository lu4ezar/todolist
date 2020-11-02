import reducer from "../filter";
import * as ActionTypes from "../../actions/actionTypes";

const initialState = {
  master: {
    status: false,
  },
  priority: {
    status: false,
    value: ["normal"],
  },
  completed: {
    status: false,
    value: false,
  },
  expired: {
    status: false,
    value: false,
  },
};

const type = ActionTypes.SET_FILTER;

const payload = {
  master: {
    status: true,
  },
};

const action = {
  type,
  payload,
};

const state = initialState;

describe("filter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should update filter on SET_FILTER action", () => {
    const expectedState = {
      master: { status: true },
      priority: {
        status: false,
        value: ["normal"],
      },
      completed: { status: false, value: false },
      expired: {
        status: false,
        value: false,
      },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
