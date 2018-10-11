import React from 'react';

const Form = (props) => {
	return(
		<form onSubmit={props.submit} className={props.editMode ? "editMode" : ""}>
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
				<select name="priority" value={props.item.priority} onChange={props.input}>
					<option value="normal">Normal</option>
					<option value="important">Important</option>
					<option value="veryImportant">Very Important</option>
				</select>
				<input type="submit" value={props.editMode ? "Save changes" : "Ok"} />
			</fieldset>
		</form>
	);
}

export default Form;