// @flow
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todos';
import Form from '../components/Form';
import type { Todo } from '../types/todos';
import type { Dispatch } from '../types';

const mapStateToProps = (state: Todo) => ({
	todo: state.todo
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
	addTodo: todo => dispatch(addTodo(todo))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
