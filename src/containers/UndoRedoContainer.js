// @flow
import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import UndoRedo from "../components/UndoRedo";
import type { Dispatch, State } from "../types";

const mapStateToProps = (state: State) => ({
  canUndo: state.todos.past.length,
  canRedo: state.todos.future.length,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  undo: () => dispatch(ActionCreators.undo()),
  redo: () => dispatch(ActionCreators.redo()),
});

// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
