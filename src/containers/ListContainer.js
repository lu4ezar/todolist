// @flow
import { connect } from 'react-redux';
import {
	deleteTodo,
	toggleTodo,
	// updateTodo,
	reorderTodos
} from '../redux/actions/todos';
import { setTodo } from '../redux/actions/todo';
import List from '../components/List';
import type { TodosState } from '../types/todos';
import type { Dispatch } from '../types';

const mapStateToProps = (state: TodosState) => ({
	todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	deleteTodo: id => dispatch(deleteTodo(id)),
	toggleTodo: id => dispatch(toggleTodo(id)),
	setTodo: id => dispatch(setTodo(id)),
	// viewTodo: mode => dispatch(changeMode(mode)),
	onDragEnd: result => dispatch(reorderTodos(result))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
