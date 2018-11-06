import React from 'react';

const ModeButton = (props) =>
    <button onClick={props.handleClick} name={props.name} value={props.value}>{props.caption}</button>;

export default ModeButton;