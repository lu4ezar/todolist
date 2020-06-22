// @flow

type FilterOn = boolean;
type PriorityFilterValues = "low" | "normal" | "high";
type PriorityFilterValue = Array<PriorityFilterValues>;
type CompletedFilterValue = boolean;
type ExpiredFilterValue = boolean;

export type Filters =
  | "filterOn"
  | "priorityFilterValue"
  | "completedFilter"
  | "expiredFilter";

export type Filter = {
  filterOn: FilterOn,
  priorityFilterEnabled: boolean,
  priorityFilter: PriorityFilterValue,
  completedFilterEnabled: boolean,
  completedFilter: CompletedFilterValue,
  expiredFilterEnabled: boolean,
  expiredFilter: ExpiredFilterValue
};

export type FilterState = {
  +filter: Filter
};

export type FilterActions = "SET_FILTER";

export type FilterValues =
  | FilterOn
  | PriorityFilterValue
  | CompletedFilterValue
  | ExpiredFilterValue;

export type FilterPayload = {
  [filter: Filters]: FilterValues
};

export type FilterAction = { type: FilterActions, payload: FilterPayload };
