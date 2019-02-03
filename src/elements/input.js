import React from 'react';
import PropTypes from 'prop-types';
// import './input.css';

const Input = props => {
	let {
		type,
		className,
		name,
		value,
		caption,
		onChange,
		checked,
		selected,
		disabled,
		right
	} = { ...props };
	// console.log(`name = ${name} value=${value} selected=${selected} checked=${checked}`)
	const labelOptions = {
		// className: className,
		htmlFor: type === 'radio' ? value.toString() : name
	};

	const click = type === 'button' ? 'onClick' : 'onChange';
	const inputOptions = {
		id: type === 'radio' ? value.toString() : name,
		type: type,
		name: name,
		value: value,
		[click]: onChange,
		checked: checked,
		selected: selected,
		disabled: disabled
	};

	return (
		/* <React.Fragment>
            {!right &&  <label className={className} htmlFor={name}>{ caption ? caption : ( name.charAt(0).toUpperCase() + name.slice(1) ) }</label>}
            <input
                id={type === 'radio' ? value : name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                selected={selected}
                disabled={disabled}
            />
            {right && <label className={className} htmlFor={type === 'radio' ? value : name}>{ caption ? caption : ( name.charAt(0).toUpperCase() + name.slice(1) ) }</label>}
        </React.Fragment> */
		<React.Fragment>
			<div className={className}>
				{!right && type !== 'button' && (
					<label {...labelOptions}>
						{caption ? caption : name.charAt(0).toUpperCase() + name.slice(1)}
					</label>
				)}
				<input {...inputOptions} />
				{right && type !== 'button' && (
					<label {...labelOptions}>
						{caption ? caption : name.charAt(0).toUpperCase() + name.slice(1)}
					</label>
				)}
			</div>
		</React.Fragment>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	// value: PropTypes.string,
	caption: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool,
	selected: PropTypes.bool,
	disabled: PropTypes.bool,
	right: PropTypes.bool
};

Input.defaultProps = {
	className: '',
	value: '',
	caption: '',
	onChange: () => {},
	checked: false,
	selected: false,
	disabled: false,
	right: false
};
export default Input;
