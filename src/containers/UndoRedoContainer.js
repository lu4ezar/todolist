// @flow
import { connect } from "react-redux";
import UndoRedo from "../elements/UndoRedo";
import type { Dispatch, State } from "../types";
import { ActionCreators } from "redux-undo";

const mapStateToProps = (state: State) => ({
  canUndo: state.todos.past.length,
  canRedo: state.todos.future.length
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  undo: () => dispatch(ActionCreators.undo()),
  redo: () => dispatch(ActionCreators.redo())
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
