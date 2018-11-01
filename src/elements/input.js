import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    let {type, className, name, value, caption, onChange, checked, selected, right} = {...props};

    if (checked != null) {
        checked = { checked: checked }
    }

    if (selected != null) {
        selected = { selected: selected }
    }

    return(
        <React.Fragment>
            {!right &&  <label className={className} htmlFor={name}>{ caption ? caption : ( name.charAt(0).toUpperCase() + name.slice(1) ) }</label>}
            <input
                id={type === 'radio' ? value : name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                {...checked}
                {...selected}
            />
            {right && <label className={className} htmlFor={type === 'radio' ? value : name}>{ caption ? caption : ( name.charAt(0).toUpperCase() + name.slice(1) ) }</label>}
        </React.Fragment>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    caption: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    selected:PropTypes.bool,
    right: PropTypes.bool
}
    
export default Input;