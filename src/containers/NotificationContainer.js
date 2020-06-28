// @flow
import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import Notification from "../elements/Notification";
import { showMessage, closeMessage } from "../redux/actions/notification";
import type { Dispatch, State } from "../types";

const mapStateToProps = (state: State) => ({
  message: state.notification,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  undo: () => dispatch(ActionCreators.undo()),
  showMessage: (message) => dispatch(showMessage(message)),
  closeMessage: () => dispatch(closeMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
