// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import type { TodosStateWithHistory, TodosAction } from "./todos";
import type { FilterState, FilterAction } from "./filter";
import type { TodoState, TodoAction } from "./todo";
import type { ModeState, ModeAction } from "./mode";
import type { NotificationState, NotificationAction } from "./notification";

export type ReduxInitAction = { type: "@@INIT" };

export type State = TodosStateWithHistory &
  FilterState &
  TodoState &
  ModeState &
  NotificationState;

export type Action =
  | ReduxInitAction
  | TodosAction
  | FilterAction
  | TodoAction
  | ModeAction
  | NotificationAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
