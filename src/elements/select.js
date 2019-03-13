import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
	{ value: 'low', label: 'Low' },
	{ value: 'normal', label: 'Normal' },
	{ value: 'high', label: 'High' }
];

const CustomSelect = props => {
	const { onChange, value, disabled, isMulti, isClearable } = props;
	const selectedValues = options.filter(option =>
		value.includes(option.value)
	);
	return (
		<Select
			options={options}
			value={selectedValues}
			isDisabled={disabled}
			onChange={onChange}
			placeholder='Priority'
			isSearchable={false}
			isMulti={isMulti}
			isClearable={isClearable}
=======
import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
	background-color: dodgerblue;
	color: milk;
	width: 450px;
	// border: 1px solid #ccc;
	// border-color: black black red black;
	// border-radius: 8px;
	// appearance: none;
	// & .select-items {
	// background-color: olive;
	// };
	// &.Select.is-open > .Select-control .Select-arrow {
	// color: white;
	// border-radius: 50%;
	// border-color: transparent transparent red;
	// }
`;

// const options = props.options;

const CustomSelect = props => {
	const { options, value, onChange } = props;
	return (
		<StyledSelect
			options={options}
			value={props.value}
			isDisabled={!options}
			onChange={onChange}
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
		/>
	);
};

<<<<<<< HEAD
CustomSelect.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.string
	]).isRequired,
	disabled: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

=======
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
export default CustomSelect;
