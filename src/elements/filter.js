import React from "react";
import PropTypes from 'prop-types';
import Input from'./input';
import "./filter.css";

const Filter = props => {
	return (
		<fieldset>
			<legend>
				<Input  type="checkbox" name="filter" checked={props.filter} onChange={props.handleChange} />
			</legend>
			<fieldset className="filters" disabled={!props.filter}>
				<Input type="radio" name="filterValue" value="normal" checked={props.filterValue === "normal"} onChange={props.handleChange} caption="Normal" right={true} />
				<Input type="radio" name="filterValue" value="important" checked={props.filterValue === "important"} onChange={props.handleChange} caption="Important" right={true} />
				<Input type="radio" name="filterValue" value="veryImportant" checked={props.filterValue === "veryImportant"} onChange={props.handleChange} caption="Very Important" right={true} />
			</fieldset>
		</fieldset>
	)
}

Filter.propTypes = {
    filter: PropTypes.bool.isRequired,
    filterValue: PropTypes.string.isRequired
}

export default Filter;
