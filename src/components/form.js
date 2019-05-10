import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import enGB from 'date-fns/locale/en-GB';
import Select from '../elements/select';
import ModalWindow from '../elements/modalWindow';

registerLocale('en-GB', enGB);

const dropdownOptions = ['low', 'normal', 'high'];

class ReactForm extends React.Component {
	state = {
		...new Todo()
	};

	componentDidMount() {
		if (this.props.todo) {
			this.setState({
				...this.props.todo
			});
		}
	}

	handleChange = e => {
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
		this.setState({
			[name]: value
		});
	};

	handleDateChange = date => {
		this.setState({
			date
		});
	};

	handleTimeChange = time => {
		this.setState({
			time
		});
	};

	handleSelectChange = priority => {
		this.setState({
			priority: priority.value
		});
	};

	onSubmit = () => this.props.handleSubmit(this.state, this.props.index);

	render() {
		return (
			<ModalWindow
				onHide={this.props.close}
				title={this.props.mode === 'edit' ? 'Edit' : 'Add'}
				body={
					<Form id="form" onSubmit={this.onSubmit}>
						<Form.Group controlId="task" title="required">
							<Form.Label>
								Todo<span>*</span>
							</Form.Label>
							<Form.Control
								name="task"
								value={this.state.task}
								onChange={this.handleChange}
								placeholder="task goes here"
							/>
						</Form.Group>
						<Form.Group controlId="description" title="required">
							<Form.Label>
								Description<span>*</span>
							</Form.Label>
							<Form.Control
								as="textarea"
								name="description"
								value={this.state.description}
								onChange={this.handleChange}
								placeholder="add description"
							/>
						</Form.Group>
						<Form.Group id="priority">
							<Form.Label>Priority</Form.Label>
							<Select
								name="priority"
								value={this.state.priority}
								options={dropdownOptions}
								onChange={this.handleSelectChange}
								placeholder="Priority"
								disabled={false}
								isMulti={false}
								isClearable={false}
							/>
						</Form.Group>
						<Form.Label>Complete until: </Form.Label>
						<Form.Row>
							<Form.Group controlId="date">
								<DatePicker
									onChange={this.handleDateChange}
									selected={this.state.date}
									dateFormat="dd.MM.YYYY"
									placeholderText="dd/mm/yyyy"
									locale="en-GB"
									isClearable
								/>
							</Form.Group>
							<Form.Group controlId="time">
								<DatePicker
									onChange={this.handleTimeChange}
									selected={this.state.time}
									dateFormat="HH:mm"
									timeFormat="HH:mm"
									placeholderText="Click to select time"
									showTimeSelect
									showTimeSelectOnly
									isClearable
								/>
							</Form.Group>
						</Form.Row>
					</Form>
				}
				footer={
					<>
						<Button variant="danger" onClick={this.props.close}>
							Cancel
						</Button>
						<Button
							variant="primary"
							form="form"
							disabled={
								!this.state.task || !this.state.description
							}
						>
							{this.props.mode === 'edit' ? 'Save changes' : 'Ok'}
						</Button>
					</>
				}
			/>
		);
	}
}

ReactForm.propTypes = {
	handleSubmit: PropTypes.func
};

export default ReactForm;
