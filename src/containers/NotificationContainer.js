// @flow
import { connect } from 'react-redux';
import Notification from '../elements/Notification';
import { showMessage, closeMessage } from '../redux/actions/notification';
import type { Dispatch } from '../types';
import { ActionCreators } from 'redux-undo';

const mapStateToProps = state => ({
	notification: state.notification
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
	undo: () => dispatch(ActionCreators.undo()),
	showMessage: message => dispatch(showMessage(message)),
	closeMessage: () => dispatch(closeMessage())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Notification);
