// @flow
import { SET_FILTER } from "../actions/actionTypes";
import type {
  Filter as FilterType,
  FilterAction,
  Filter,
} from "../../types/filter";

const initialState: Filter = {
  master: {
    status: false,
  },
  priority: {
    status: false,
    [("value": string)]: ["normal"],
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

const filter = (
  state: FilterType = initialState,
  action: FilterAction
): FilterType => {
  const { payload } = action;
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        ...payload,
      };
    default: {
      return state;
    }
  }
};

export default filter;
