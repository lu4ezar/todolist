// @flow
import { SET_FILTER } from "../actions/actionTypes";
import type {
  Filter as FilterType,
  FilterAction,
  Filter,
} from "../../types/filter";
import { TodoPriorityValues } from "../../generated/graphql";

const initialState: Filter = {
  master: {
    status: false,
  },
  priority: {
    status: false,
    value: [TodoPriorityValues.Normal],
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
  const { payload } = action || {};
  const { filter: filterName, property, value } = payload || {};
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [(filterName: string)]: {
          ...state[filterName],
          [(property: string)]: value,
        },
      };
    default: {
      return state;
    }
  }
};

export default filter;
