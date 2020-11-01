// @flow
import type { Filter, ActionPayload } from "../../types/filter";

export type Props = {
  filter: Filter,
  completedCount: number,
  expiredCount: number,
  setFilter: (payload: ActionPayload) => void,
};
