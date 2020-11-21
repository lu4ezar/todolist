// @flow
import { connect } from "react-redux";
import { dropTodo } from "../redux/actions/currentTodoId";
import setMode from "../redux/actions/mode";
import type { Dispatch, State } from "../types";
import Form from "../components/Form";

const closeForm = () => (dispatch) => {
  dispatch(dropTodo());
  dispatch(setMode("list"));
};

const mapStateToProps = (state: State) => ({
  id: state.currentTodoId,
  mode: state.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeForm: () => dispatch(closeForm()),
});

// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(Form);
