// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import type { TodosStateWithHistory } from '../types/todos';
import type { Store } from '../types';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState: TodosStateWithHistory): Store =>
	createStore(
		reducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);

export default configureStore;
