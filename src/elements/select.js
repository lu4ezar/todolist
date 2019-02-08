import React from 'react';
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
		/>
	);
};

export default CustomSelect;
