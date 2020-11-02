// @flow
import { connect } from "react-redux";
import { addTodo, updateTodo } from "../redux/actions/todos";
import { dropTodo } from "../redux/actions/currentTodoId";
import setMode from "../redux/actions/mode";
import type { Dispatch, State } from "../types";
import Form from "../components/Form";

const closeForm = () => (dispatch) => {
  dispatch(dropTodo());
  dispatch(setMode("list"));
};

const submit = (todo) => (dispatch) => {
  if (todo.id) {
    dispatch(updateTodo(todo));
  } else {
    dispatch(addTodo(todo));
  }
  closeForm();
};

const mapStateToProps = (state: State) => ({
  id: state.currentTodoId,
  mode: state.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submit: (todo) => dispatch(submit(todo)),
  closeForm: () => dispatch(closeForm()),
});

// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(Form);
