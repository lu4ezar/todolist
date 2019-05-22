// @flow
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, reorderTodos } from '../redux/actions/todos';
import { setTodo } from '../redux/actions/todo';
import { setMode } from '../redux/actions/mode';
import List from '../components/List';
import type { TodosState } from '../types/todos';
import type { Dispatch } from '../types';

const mapStateToProps = (state: TodosState) => ({
	todos: state.todos
});

const changeMode = (id, mode) => {
	return dispatch => {
		dispatch(setTodo(id));
		dispatch(setMode(mode));
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	deleteTodo: id => dispatch(deleteTodo(id)),
	toggleTodo: id => dispatch(toggleTodo(id)),
	changeMode: (id, mode) => dispatch(changeMode(id, mode)),
	onDragEnd: result => dispatch(reorderTodos(result))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
