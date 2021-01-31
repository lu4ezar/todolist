// @flow
import { PriorityValues } from "../generated/graphql";

export type FilterStatus = boolean;

type MasterFilterName = "master";
type PriorityFilterName = "priority";
type CompletedFilterName = "completed";
type ExpiredFilterName = "expired";

export type FilterName =
  | MasterFilterName
  | PriorityFilterName
  | CompletedFilterName
  | ExpiredFilterName;

type FilterProperty = "completed" | "value";

type MasterFilter = {|
  completed: FilterStatus,
|};

export type PriorityFilterValues =
  | typeof PriorityValues.Low
  | typeof PriorityValues.Normal
  | typeof PriorityValues.High;

export type PriorityFilterValue = Array<PriorityFilterValues>;

type PriorityFilter = {|
  completed: FilterStatus,
  [value: string]: PriorityFilterValue,
|};

export type CompletedFilterValue = boolean;

type CompletedFilter = {|
  completed: FilterStatus,
  value: CompletedFilterValue,
|};

export type ExpiredFilterValue = boolean;

type ExpiredFilter = {|
  completed: FilterStatus,
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
  filter: FilterName,
  [property: string]: FilterProperty,
  value: FilterValue,
|};

export type FilterAction = {|
  type: "SET_FILTER",
  +payload: ActionPayload,
|};
