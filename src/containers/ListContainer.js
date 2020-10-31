// @flow
import { connect } from "react-redux";
import type { DropResult } from "react-beautiful-dnd";
import { deleteTodo, toggleTodo, reorderTodos } from "../redux/actions/todos";
import { setTodo } from "../redux/actions/currentTodoId";
import setMode from "../redux/actions/mode";
import List from "../components/List";
import type { Mode } from "../types/mode";
import type { Dispatch, State } from "../types";
import { showMessage } from "../redux/actions/notification";
import { getFilteredList } from "../redux/selectors";

const mapStateToProps = (state: State) => ({
  todos: getFilteredList(state),
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
  onDragEnd: (result: DropResult) => dispatch(reorderTodos(result)),
});

// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(List);
