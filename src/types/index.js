// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { TodosState, TodosAction } from './todos';
import type { FilterState, FilterAction } from './filter';
import type { TodoState, TodoAction } from './todo';

export type ReduxInitAction = { type: '@@INIT' };

export type State = TodosState & FilterState & TodoState;

export type Action = ReduxInitAction | TodosAction | FilterAction | TodoAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
