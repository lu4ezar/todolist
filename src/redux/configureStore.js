// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import type { TodosState } from '../types/todos';
import type { Store } from '../types';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState: TodosState): Store =>
	createStore(
		reducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);

export default configureStore;
