// @flow
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todos';
import Form from '../components/Form';
import { setTodo } from '../redux/actions/todo';
import { setMode } from '../redux/actions/mode';
import type { Todo as TodoType } from '../types/todos';
import type { Dispatch } from '../types';

const mapStateToProps = (state: TodoType) => ({
	todo: state.todo,
	mode: state.mode
});

const cancel = () => {
	return (dispatch, getState) => {
		if (getState().mode === 'list') {
			return;
		}
		dispatch(setTodo());
		dispatch(setMode('list'));
	};
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
	addTodo: todo => dispatch(addTodo(todo)),
	cancel: () => dispatch(cancel())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
