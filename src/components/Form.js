import * as React from 'react';
import Todo from '../Todo';
import BootstrapForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import enGB from 'date-fns/locale/en-GB';
import Select from '../elements/select';

registerLocale('en-GB', enGB);

const dropdownOptions = ['low', 'normal', 'high'];

const initialState = { ...new Todo({ id: 0, task: '', desc: '' }) };

const Form = ({ todo, addTodo, mode, close }) => {
	const [state, setTodo] = React.useState(initialState);
	React.useEffect(() => {
		if (Object.keys(todo).length > 0) {
			setTodo(todo);
		}
	}, [todo]);

	const handleChange = e => {
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
		setTodo({
			[name]: value
		});
	};

	const handleDateChange = date => {
		setTodo({
			date
		});
	};

	const handleTimeChange = time => {
		setTodo({
			time
		});
	};

	const handleSelectChange = priority => {
		setTodo({
			priority: priority.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		addTodo(state);
		setTodo({
			...initialState
		});
	};
	return (
		<BootstrapForm id="form" onSubmit={onSubmit}>
			<fieldset disabled={mode === 'form'}>
				<BootstrapForm.Label>{`${
					mode === 'edit' ? 'Edit' : 'Add'
				} Todo`}</BootstrapForm.Label>
				<BootstrapForm.Group controlId="task" title="required">
					<BootstrapForm.Label>
						Todo<span>*</span>
					</BootstrapForm.Label>
					<BootstrapForm.Control
						name="task"
						value={state.task}
						onChange={handleChange}
						placeholder="task goes here"
					/>
				</BootstrapForm.Group>
				<BootstrapForm.Group controlId="description" title="required">
					<BootstrapForm.Label>
						Description<span>*</span>
					</BootstrapForm.Label>
					<BootstrapForm.Control
						as="textarea"
						name="description"
						value={state.description}
						onChange={handleChange}
						placeholder="add description"
					/>
				</BootstrapForm.Group>
				<BootstrapForm.Group id="priority">
					<BootstrapForm.Label>Priority</BootstrapForm.Label>
					<Select
						name="priority"
						value={state.priority}
						options={dropdownOptions}
						onChange={handleSelectChange}
						placeholder="Priority"
						disabled={false}
						isMulti={false}
						isClearable={false}
					/>
				</BootstrapForm.Group>
				<BootstrapForm.Label>Complete until: </BootstrapForm.Label>
				<BootstrapForm.Row>
					<BootstrapForm.Group controlId="date">
						<DatePicker
							onChange={handleDateChange}
							selected={state.date}
							dateFormat="dd.MM.YYYY"
							placeholderText="dd/mm/yyyy"
							locale="en-GB"
							isClearable
						/>
					</BootstrapForm.Group>
					<BootstrapForm.Group controlId="time">
						<DatePicker
							onChange={handleTimeChange}
							selected={state.time}
							dateFormat="HH:mm"
							timeFormat="HH:mm"
							placeholderText="Click to select time"
							showTimeSelect
							showTimeSelectOnly
							isClearable
						/>
					</BootstrapForm.Group>
				</BootstrapForm.Row>
				<BootstrapForm.Group controlId="buttons">
					<Button variant="danger" onClick={close}>
						Cancel
					</Button>
					<Button
						type="submit"
						variant="primary"
						form="form"
						disabled={!state.task || !state.description}
					>
						{mode === 'edit' ? 'Save changes' : 'Ok'}
					</Button>
				</BootstrapForm.Group>
			</fieldset>
		</BootstrapForm>
	);
};

export default Form;
