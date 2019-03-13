<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
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
		...new Item()
	};

	componentDidMount() {
		if (this.props.item) {
			this.setState({
				...this.props.item
			});
		}
	}

	handleChange = e => {
		let { name, value, type, checked } = e.target;
=======
// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import { Form, GridColumn, Label, Input } from 'semantic-ui-react';

const selectOptions = [
	{
		key: '1',
		value: 'normal',
		text: 'Normal'
	},
	{
		key: '2',
		value: 'important',
		text: 'Important'
	},
	{
		key: '3',
		value: 'veryImportant',
		text: 'Very important'
	}
];

class ReactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...new Item() };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(data) {
		let { name, value, type, checked } = data;
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
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
<<<<<<< HEAD
			<ModalWindow
				onHide={this.props.close}
				title={this.props.mode === 'edit' ? 'Edit' : 'Add'}
				body={
					<Form>
						<Form.Group controlId='task' title='required'>
							<Form.Label>
								Todo<span>*</span>
							</Form.Label>
							<Form.Control
								name='task'
								value={this.state.task}
								onChange={this.handleChange}
								placeholder='task goes here'
							/>
						</Form.Group>
						<Form.Group controlId='description' title='required'>
							<Form.Label>
								Description<span>*</span>
							</Form.Label>
							<Form.Control
								as='textarea'
								name='description'
								value={this.state.description}
								onChange={this.handleChange}
								placeholder='add description'
							/>
						</Form.Group>
						<Form.Group id='priority'>
							<Form.Label>Priority</Form.Label>
							<Select
								name='priority'
								value={this.state.priority}
								options={dropdownOptions}
								onChange={this.handleSelectChange}
								placeholder='Priority'
								disabled={false}
								isMulti={false}
								isClearable={false}
							/>
						</Form.Group>
						<Form.Label>Complete until: </Form.Label>
						<Form.Row>
							<Form.Group controlId='date'>
								<DatePicker
									onChange={this.handleDateChange}
									selected={this.state.date}
									dateFormat='dd.MM.YYYY'
									placeholderText='dd/mm/yyyy'
									locale='en-GB'
									isClearable
								/>
							</Form.Group>
							<Form.Group controlId='time'>
								<DatePicker
									onChange={this.handleTimeChange}
									selected={this.state.time}
									dateFormat='HH:mm'
									timeFormat='HH:mm'
									placeholderText='Click to select time'
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
						<Button variant='danger' onClick={this.props.close}>
							Cancel
						</Button>
						<Button
							variant='primary'
							type='button'
							onClick={this.onSubmit}
							disabled={
								!this.state.task || !this.state.description
							}
						>
							{this.props.mode === 'edit' ? 'Save changes' : 'Ok'}
						</Button>
					</>
				}
			/>
=======
			<Form
				onSubmit={() => this.props.handleSubmit(this.state, this.props.index)}
			>
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
				<Form.Button
					type="submit"
					disabled={!this.state.task || !this.state.description}
				>
					{this.props.mode === 'edit' ? 'Save changes' : 'Ok'}
				</Form.Button>
			</Form>
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
		);
	}
}

ReactForm.propTypes = {
<<<<<<< HEAD
	handleSubmit: PropTypes.func
=======
	handleSubmit: PropTypes.func.isRequired
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
};

export default ReactForm;
