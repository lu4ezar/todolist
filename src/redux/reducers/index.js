import { combineReducers } from 'redux';
import todos from './todos';
import mode from './mode';
import todo from './todo';
import notification from './notification';

export default combineReducers({
	notification,
	todo,
	todos,
	mode
});
