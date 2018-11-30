import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from 'prop-types';

const ButtonPanel = (props) => {
    return(
        <React.Fragment>
            <button onClick={props.edit}>EDIT</button>
            <button onClick={props.delete}>DELETE</button>
        </React.Fragment>
    )
}

ButtonPanel.propTypes = {
    edit: PropTypes.func,
    delete: PropTypes.func
}

export default ButtonPanel;