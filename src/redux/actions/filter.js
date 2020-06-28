// @flow
import type { FilterAction, ActionPayload } from "../../types/filter";
import { SET_FILTER } from "./actionTypes";

const setFilter = (payload: ActionPayload): FilterAction => ({
  type: SET_FILTER,
  payload,
});

export default setFilter;
