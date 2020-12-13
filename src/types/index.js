// @flow
import type { TodosStateWithHistory, TodosAction } from "./todos";
import type { FilterState, FilterAction } from "./filter";
import type { CurrentTodoIdState, CurrentTodoIdAction } from "./currentTodoId";
import type { ModeState, ModeAction } from "./mode";
import type { NotificationState, NotificationAction } from "./notification";

export type State = TodosStateWithHistory &
  FilterState &
  CurrentTodoIdState &
  ModeState &
  NotificationState;

export type Action =
  | TodosAction
  | FilterAction
  | CurrentTodoIdAction
  | ModeAction
  | NotificationAction;
