import React from 'react';

const Record = (props => {
    return (
        <li>
            <fieldset>
                <legend>
                    {props.item.name}
                </legend>
                <div>
                    {props.item.description}
                </div>
                <button onClick={props.delete}>Delete</button>
                <button onClick={props.edit}>Edit</button>
                <button onClick={props.up}>Up</button>
                <button onClick={props.down}>Down</button>
            </fieldset>
        </li>
    )
    }
);

export default Record;