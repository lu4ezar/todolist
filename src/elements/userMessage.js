import React from 'react';
import PropTypes from 'prop-types'; 

const UserMessage = (props) => {
    return (
        <div className={props.type}>
            {props.message}
        </div>
    );
}

UserMessage.propTypes = {
    type: propTypes.string,
    message: propTypes.string.isRequired
}

export default UserMessage;