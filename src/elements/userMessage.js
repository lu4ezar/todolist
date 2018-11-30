import React from "react";
import PropTypes from "prop-types";

const UserMessage = props => {
	return (
		<div className="hide">
			<div className={props.type}>{props.message}</div>
		</div>
	);
};

UserMessage.propTypes = {
	type: PropTypes.string,
	message: PropTypes.string.isRequired
};

export default UserMessage;
