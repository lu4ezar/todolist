import React from 'react';

const Form = (props) => {
	return(
		<form className={props.editMode ? "editMode" : ""}>
			<fieldset>
				<abbr title="required">
					<input 
						type="text"
						name="name"
						value={props.item.name}
						placeholder="name"
						onChange={props.input}
						autoFocus
					/>*</abbr>
				<br />
				<abbr title="required">
					<input
						type="textarea"
						name="description"
						value={props.item.description}
						placeholder="description"
						onChange={props.input}
					/>*</abbr>
				<input
					type="submit"
					value="Ok"
					onClick={props.submit} />
			</fieldset>
		</form>
	);
}

export default Form;