// @flow
import { connect } from 'react-redux';
import {
	deleteTodo,
	toggleTodo,
	// updateTodo,
	reorderTodos
} from '../redux/actions/todos';
import { setTodo } from '../redux/actions/todo';
import { setMode } from '../redux/actions/mode';
import List from '../components/List';
import type { TodosState } from '../types/todos';
import type { Dispatch } from '../types';

const mapStateToProps = (state: TodosState) => ({
	todos: state.todos
});

const editTodo = id => {
	return dispatch => {
		dispatch(setTodo(id));
		dispatch(setMode('edit'));
	};
};

const viewTodo = id => {
	return dispatch => {
		dispatch(setTodo(id));
		dispatch(setMode('form'));
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	deleteTodo: id => dispatch(deleteTodo(id)),
	toggleTodo: id => dispatch(toggleTodo(id)),
	viewTodo: mode => dispatch(viewTodo(mode)),
	editTodo: id => dispatch(editTodo(id)),
	onDragEnd: result => dispatch(reorderTodos(result))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
