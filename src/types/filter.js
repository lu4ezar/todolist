// @flow

type FilterStatus = boolean;

type MasterFilterTitle = "master";
type PriorityFilterTitle = "priority";
type CompletedFilterTitle = "completed";
type ExpiredFilterTitle = "expired";

export type FilterTitle =
  | MasterFilterTitle
  | PriorityFilterTitle
  | CompletedFilterTitle
  | ExpiredFilterTitle;

type FilterProperty = "status" | "value";

type MasterFilter = {|
  status: FilterStatus,
|};

type PriorityFilterValues = "Low" | "Normal" | "High";

type PriorityFilterValue = {
  [value: string]: Array<PriorityFilterValues>,
};

type PriorityFilter = {|
  status: FilterStatus,
  [value: string]: PriorityFilterValue,
|};

type CompletedFilterValue = boolean;

type CompletedFilter = {|
  status: FilterStatus,
  value: CompletedFilterValue,
|};

type ExpiredFilterValue = boolean;

type ExpiredFilter = {|
  status: FilterStatus,
  value: ExpiredFilterValue,
|};

export type Filter = {|
  master: MasterFilter,
  priority: PriorityFilter,
  completed: CompletedFilter,
  expired: ExpiredFilter,
|};

export type FilterState = {| +filter: Filter |};

export type FilterValue =
  | FilterStatus
  | PriorityFilterValue
  | CompletedFilterValue
  | ExpiredFilterValue;

export type ActionPayload = {|
  filter: FilterTitle,
  [property: string]: FilterProperty,
  value: FilterValue,
|};

export type FilterAction = {|
  type: "SET_FILTER",
  +payload: ActionPayload,
|};
