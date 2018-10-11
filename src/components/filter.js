import React from 'react';

const Filter = (props) => {
    return (
        <fieldset>
            
            <legend>
                <label>
                    Filter
                    <input
                        type="checkbox"
                        name="filterOn"
                        checked={props.filterOn}
                        onChange={props.handleChange}
                    />
                </label>
            </legend>

            <fieldset className="filters" disabled={!props.filterOn}>
                <label>
                    <input
                        type="radio"
                        name="filterValue"
                        value="normal"
                        checked={props.filterValue === "normal"}
                        onChange={props.handleChange}
                    />
                    Normal
                </label>

                <label>
                    <input
                        type="radio"
                        name="filterValue"
                        value="important"
                        checked={props.filterValue === "important"}
                        onChange={props.handleChange}
                    />
                    Important
                </label>

                <label>
                    <input
                        type="radio"
                        name="filterValue"
                        value="veryImportant"
                        checked={props.filterValue === "veryImportant"}
                        onChange={props.handleChange}
                    />
                    Very Important
                </label>
            </fieldset>

        </fieldset>    
    )
}

export default Filter;