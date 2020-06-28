// @flow
import { connect } from "react-redux";
import { addTodo, updateTodo } from "../redux/actions/todos";
import Form from "../components/Form";
import setTodo from "../redux/actions/currentTodoId";
import setMode from "../redux/actions/mode";
import type { Dispatch, State } from "../types";
import { getTodoById } from "../redux/selectors";

const closeForm = () => {
  return (dispatch: Dispatch): void => {
    dispatch(setTodo(null));
    dispatch(setMode("list"));
  };
};

const submit = (todo) => {
  return (dispatch) => {
    if (todo.id) {
      dispatch(updateTodo(todo));
    } else {
      dispatch(addTodo(todo));
    }
    dispatch(closeForm());
  };
};

const mapStateToProps = (state: State) => ({
  todo: getTodoById(state),
  mode: state.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submit: (todo) => dispatch(submit(todo)),
  closeForm: () => dispatch(closeForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
