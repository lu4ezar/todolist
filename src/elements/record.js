import React from 'react';
import PropTypes from 'prop-types'; 
// import List from '../components/list';
import './record.css';

const Record = (props => {
    let className = props.item.priority;
    className += props.item.completed ? " completed" : "";
    const item = props.item;
    return (
        <li className={className} onClick={props.handleClick}>
            <fieldset>
                <legend>
                    {props.item.task}
                </legend>
                <p>
                    {props.item.description}
                </p>
                <p>
                    priority: 
                    {props.item.priority}
                </p>
                <p>
                    my className: {className}
                </p>
                {((props.item.completeUntilDate) || (props.item.completeUntilTime)) && 
                    <p>
                        before: {props.item.completeUntilDate} {props.item.completeUntilTime}
                    </p>
                }
                <label>Completed
                    <input type="checkbox" name="completed" checked={props.item.completed} onChange={props.completed} />
                </label>
                <br />
                <button onClick={props.delete}>Delete</button>
                {(props.edit) && (<button onClick={props.edit}>Edit</button>)}
                {(props.up) && <button onClick={props.up}>Up</button>}
                {(props.down) && <button onClick={props.down}>Down</button>}
                <button onClick={props.addLevel}>Add Level</button>
                {props.children}
            </fieldset>
        </li>
    )
    }
);

Record.propTypes = {
    item: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired,
}
export default Record;