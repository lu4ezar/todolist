// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { TodosState, TodosAction } from './todos';
import type { FilterState, FilterAction } from './filter';
import type { TodoState, TodoAction } from './todo';
import type { ModeState, ModeAction } from './mode';

export type ReduxInitAction = { type: '@@INIT' };

export type State = TodosState & FilterState & TodoState & ModeState;

export type Action =
	| ReduxInitAction
	| TodosAction
	| FilterAction
	| TodoAction
	| ModeAction
	| NotificationAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
