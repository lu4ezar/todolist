import React from 'react';

const Record = (props => {
    let className = props.className + props.item.priority;
    let completedButtonCaption = "Completed";
    const completed = props.item.completed;
    if (completed) {
        className += "completed";
        completedButtonCaption="Not Completed";
    }
    return (
        <li className={className}>
            <fieldset>
                <legend>
                    {props.item.name}
                </legend>
                <div>
                    {props.item.description}
                </div>
                <div>
                    priority: 
                    {props.item.priority}
                </div>
                <button onClick={props.delete}>Delete</button>
                <button onClick={props.edit}>Edit</button>
                <button onClick={props.up}>Up</button>
                <button onClick={props.down}>Down</button>
                <button onClick={props.completed}>{completedButtonCaption}</button>
            </fieldset>
        </li>
    )
    }
);

export default Record;