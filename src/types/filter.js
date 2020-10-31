// @flow
import { TodoPriorityValues } from "../generated/graphql";

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

type FilterProperty = "status" | "value";

type MasterFilter = {|
  status: FilterStatus,
|};

export type PriorityFilterValues =
  | typeof TodoPriorityValues.Low
  | typeof TodoPriorityValues.Normal
  | typeof TodoPriorityValues.High;

export type PriorityFilterValue = Array<PriorityFilterValues>;

type PriorityFilter = {|
  status: FilterStatus,
  [value: string]: PriorityFilterValue,
|};

export type CompletedFilterValue = boolean;

type CompletedFilter = {|
  status: FilterStatus,
  value: CompletedFilterValue,
|};

export type ExpiredFilterValue = boolean;

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
  filter: FilterName,
  [property: string]: FilterProperty,
  value: FilterValue,
|};

export type FilterAction = {|
  type: "SET_FILTER",
  +payload: ActionPayload,
|};
