import { combineReducers } from 'redux';
import todos from './todos';
import mode from './mode';
import todo from './todo';

export default combineReducers({
	todo,
	todos,
	mode
});
