// @flow
import * as React from "react";
// import { connect } from "react-redux";
// import { ActionCreators } from "redux-undo";
import Notification from "../components/Notification";
// import { showMessage, closeMessage } from "../redux/actions/notification";
// import type { Dispatch, State } from "../types";

export default () => <Notification />;

// const mapStateToProps = (state: State) => ({
//   message: state.notification,
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   undo: () => dispatch(ActionCreators.undo()),
//   showMessage: (message) => dispatch(showMessage(message)),
//   closeMessage: () => dispatch(closeMessage()),
// });

// // $FlowFixMe
// export default connect(mapStateToProps, mapDispatchToProps)(Notification);
