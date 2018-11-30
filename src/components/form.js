// @ts-check
import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import {
	Form,
	GridColumn,
	Label,
	Input,
} from "semantic-ui-react";

const selectOptions = [
	{
		key: "1",
		value: "normal",
		text: "Normal"
	},
	{
		key: "2",
		value: "important",
		text: "Important"
	},
	{
		key: "3",
		value: "veryImportant",
		text: "Very important"
	}
];

class ReactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...new Item()};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(data) {
		let { name, value, type, checked } = data;
		value = type === "checkbox" ? checked : value;
		this.setState({
			[name]: value
		});
	}

	componentDidMount() {
		if (this.props.item) {
			for (const prop in this.props.item) {
				this.setState({
					[prop]: this.props.item[prop]
				});
			}
		}
	}

	render() {
		return (
			<Form onSubmit={() => this.props.handleSubmit(this.state, this.props.index)}>
				<Form.Input
					label="Task"
					name="task"
					type="text"
					placeholder="task goes here"
					value={this.state.task}
					onChange={(e, data) => this.handleChange(data)}
					autoFocus
				/>
				<Form.TextArea
					label="Description"
					name="description"
					type="textarea"
					placeholder="add description"
					value={this.state.description}
					onChange={(e, data) => this.handleChange(data)}
				/>
				<GridColumn>
					<Form.Dropdown 
						name="priority"
						value={this.state.priority}
						placeholder="Priority"
						options={selectOptions}
						onChange={(e, data) => this.handleChange(data)}
						selection
					/>
				</GridColumn>
				<Label sm={2} content="Complete until: " />
				<Input
					type="date"
					name="date"
					value={this.state.date}
					onChange={(e, data) => this.handleChange(data)}
				/>
				<Input
					type="time"
					name="time"
					value={this.state.time}
					onChange={(e, data) => this.handleChange(data)}
				/>
				<Form.Button type="submit" disabled={!this.state.task || !this.state.description}>{this.props.mode === 'edit' ? "Save changes" : "Ok"}</Form.Button>
			</Form>
		);
	}
}

ReactForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default ReactForm;
