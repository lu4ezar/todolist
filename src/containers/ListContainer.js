// @flow
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/todos";
import { setTodo } from "../redux/actions/currentTodoId";
import setMode from "../redux/actions/mode";
import List from "../components/List";
import type { Mode } from "../types/mode";
import type { Dispatch, State } from "../types";
import { showMessage } from "../redux/actions/notification";

const mapStateToProps = (state: State) => ({
  filter: state.filter,
  mode: state.mode,
});

const showTodo = (id: string, mode: Mode) => (dispatch) => {
  dispatch(setTodo(id));
  dispatch(setMode(mode));
};

const deleteTodoShowMessage = (id: string) => (dispatch: Dispatch) => {
  dispatch(showMessage("Todo was deleted"));
  dispatch(deleteTodo(id));
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTodo: (id: string) => deleteTodoShowMessage(id),
  toggleTodo: (id: string) => dispatch(toggleTodo(id)),
  showTodo: (id: string, mode: Mode) => dispatch(showTodo(id, mode)),
});

// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(List);
