// @flow
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, reorderTodos } from '../redux/actions/todos';
import { setTodo } from '../redux/actions/currentTodoId';
import { setMode } from '../redux/actions/mode';
import List from '../components/List';
import type { TodosStateWithHistory } from '../types/todos';
import type { Dispatch } from '../types';
import { showMessage } from '../redux/actions/notification';

const mapStateToProps = (state: TodosStateWithHistory) => ({
	todos: state.todos.present
});

const showTodo = (id, mode) => {
	return (dispatch, getState) => {
		dispatch(setTodo(id));
		dispatch(setMode(mode));
	};
};

const deleteTodoShowMessage = id => dispatch => {
	dispatch(showMessage('Todo was deleted'));
	dispatch(deleteTodo(id));
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setMode: () => dispatch(setMode('form')),
	deleteTodo: id => dispatch(deleteTodoShowMessage(id)),
	toggleTodo: id => dispatch(toggleTodo(id)),
	showTodo: (id, mode) => dispatch(showTodo(id, mode)),
	onDragEnd: result => dispatch(reorderTodos(result))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
