import React from "react";
import PropTypes from "prop-types";
import Input from "./input";
// import './record.css';

const Record = props => {
    const item = props.item;
    let className = item.priority;
    className += item.status === "completed" ? " completed" : "";
    className += item.status === "expired" ? " expired" : "";
    return (
        <div className={className} onClick={props.handleClick}>
            <fieldset>
                <legend>{item.task}</legend>
                <p>{item.description}</p>
                <p>
                    priority:
                    {item.priority}
                </p>
                <p>my className: {className}</p>
                {(item.date || item.time) && (
                    <p>
                        before: {item.date}{" "}
                        {item.time}
                    </p>
                )}
                <Input
                    type="checkbox"
                    name="completed"
                    checked={item.status === "completed"}
                    onChange={props.completed}
                    caption="Completed"
                />
                <br />
                {/* <button onClick={props.delete}>Delete</button>
                {(props.edit) && (<button onClick={props.edit}>Edit</button>)}
                {(props.up) && <button onClick={props.up}>Up</button>}
                {(props.down) && <button onClick={props.down}>Down</button>}
                <button onClick={props.addLevel}>Add Level</button> */}
                {props.children}
            </fieldset>
        </div>
    );
};

Record.propTypes = {
    item: PropTypes.object.isRequired
    //delete: PropTypes.func.isRequired,
};
export default Record;
