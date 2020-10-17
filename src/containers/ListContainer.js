// @flow
import { connect } from "react-redux";
import { deleteTodo, toggleTodo, reorderTodos } from "../redux/actions/todos";
import setTodo from "../redux/actions/currentTodoId";
import setMode from "../redux/actions/mode";
import List from "../components/List";
import type { Id } from "../types/todo";
import type { Mode } from "../types/mode";
import type { Dispatch, State } from "../types";
import { showMessage } from "../redux/actions/notification";
import { getFilteredList } from "../redux/selectors";

const mapStateToProps = (state: State) => ({
  todos: getFilteredList(state),
  mode: state.mode,
});

const showTodo = (id: Id, mode: Mode) => {
  return (dispatch: Dispatch) => {
    dispatch(setTodo(id));
    dispatch(setMode(mode));
  };
};

const deleteTodoShowMessage = (id: Id) => (dispatch: Dispatch) => {
  dispatch(showMessage("Todo was deleted"));
  dispatch(deleteTodo(id));
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodoShowMessage(id)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  showTodo: (id, mode) => dispatch(showTodo(id, mode)),
  onDragEnd: (result) => dispatch(reorderTodos(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
