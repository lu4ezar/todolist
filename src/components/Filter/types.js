// @flow
import type { Filter, FilterName, ActionPayload } from "../../types/filter";

export type Props = {|
  filter: Filter,
  handleChange: (filter: FilterName) => void,
  completedCount: number,
  expiredCount: number,
  setFilter: (payload: ActionPayload) => void,
|};
