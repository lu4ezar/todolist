// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import type { TodosStateWithHistory, TodosAction } from "./todos";
import type { FilterState, FilterAction } from "./filter";
import type { CurrentTodoIdState, CurrentTodoIdAction } from "./currentTodoId";
import type { ModeState, ModeAction } from "./mode";
import type { NotificationState, NotificationAction } from "./notification";

export type ReduxInitAction = { type: "@@INIT" };

export type State = TodosStateWithHistory &
  FilterState &
  CurrentTodoIdState &
  ModeState &
  NotificationState;

export type Action =
  | ReduxInitAction
  | TodosAction
  | FilterAction
  | CurrentTodoIdAction
  | ModeAction
  | NotificationAction;

export type Store = ReduxStore<State, Action>;

type GetState = () => State;
type PromiseAction = Promise<Action>;
export type ThunkAction = (
  dispatch: ReduxDispatch<Action>,
  getState: GetState
) => any;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
