// @ts-check
import React from 'react';
import Item from '../Item';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...new Item()};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]:value
		});
	}

	render() {
		return (
			<form onSubmit={() => this.props.handleSubmit(this.state)} className={this.props.editMode ? "editMode" : ""}>
			<fieldset>
				<div id="required">
					<label>Task
						<abbr title="required">*</abbr>
						<input type="text" name="task" value={this.state.task} onChange={this.handleChange} autoFocus	/>
					</label>
					<br />
					<label>Description
						<abbr title="required">*</abbr>
						<textarea name="description" value={this.state.description} onChange={this.handleChange} />
					</label>
				</div>
				<div id="optional">
					<label>Priority
						<select name="priority" value={this.state.priority} onChange={this.handleChange}>
							<option value="normal">Normal</option>
							<option value="important">Important</option>
							<option value="veryImportant">Very Important</option>
						</select>
					</label>
					<br />
					<label>Complete until:
						<input type="date" name="completeUntilDate" value={this.state.completeUntilDate} onChange={this.handleChange} />
						<input type="time" name="completeUntilTime" value={this.state.completeUntilTime} onChange={this.handleChange} />
					</label>
					<label>
						<button type="submit" disabled={!this.state.task || !this.state.description}>{this.props.editMode ? "Save changes" : "Ok"}</button>
					</label>
				</div>
			</fieldset>
		</form>
		)
	}
}

export default Form;