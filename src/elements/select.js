import React from 'react';
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
		/>
	);
};

CustomSelect.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.string
	]).isRequired,
	disabled: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

export default CustomSelect;
