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

const initialState = new Todo({ id: null, task: '', desc: '' });

const Form = ({ todo, addTodo, updateTodo, mode, cancel }) => {
	const [state, setState] = React.useState(initialState);
	React.useEffect(() => {
		if (Object.keys(todo).length > 0) {
			setState(todo);
		} else {
			setState(initialState);
		}
	}, [todo]);
	const handleChange = e => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const handleDateChange = date => {
		setState({ ...state, date });
	};

	const handleTimeChange = time => {
		setState({ ...state, time });
	};

	const handleSelectChange = priority => {
		setState({ ...state, priority: priority.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		switch (mode) {
			case 'list':
				addTodo(state);
				break;
			case 'edit':
				updateTodo(state);
				break;
			default:
				return;
		}
		setState(initialState);
	};
	return (
		<BootstrapForm id='form' onSubmit={onSubmit}>
			<fieldset disabled={mode === 'view'}>
				<BootstrapForm.Label>{`${
					mode === 'edit' ? 'Edit' : 'Add'
				} Todo`}</BootstrapForm.Label>
				<BootstrapForm.Group controlId='task' title='required'>
					<BootstrapForm.Label>
						Todo<span>*</span>
					</BootstrapForm.Label>
					<BootstrapForm.Control
						name='task'
						value={state.task}
						onChange={handleChange}
						placeholder='task goes here'
					/>
				</BootstrapForm.Group>
				<BootstrapForm.Group controlId='description' title='required'>
					<BootstrapForm.Label>
						Description<span>*</span>
					</BootstrapForm.Label>
					<BootstrapForm.Control
						as='textarea'
						name='description'
						value={state.description}
						onChange={handleChange}
						placeholder='add description'
					/>
				</BootstrapForm.Group>
				<BootstrapForm.Group id='priority'>
					<BootstrapForm.Label>Priority</BootstrapForm.Label>
					<Select
						name='priority'
						value={state.priority}
						options={dropdownOptions}
						onChange={handleSelectChange}
						placeholder='Priority'
						disabled={false}
						isMulti={false}
						isClearable={false}
					/>
				</BootstrapForm.Group>
				<BootstrapForm.Label>Complete until: </BootstrapForm.Label>
				<BootstrapForm.Row>
					<BootstrapForm.Group controlId='date'>
						<DatePicker
							onChange={handleDateChange}
							selected={state.date}
							dateFormat='dd.MM.YYYY'
							placeholderText='dd/mm/yyyy'
							locale='en-GB'
							isClearable
						/>
					</BootstrapForm.Group>
					<BootstrapForm.Group controlId='time'>
						<DatePicker
							onChange={handleTimeChange}
							selected={state.time}
							dateFormat='HH:mm'
							timeFormat='HH:mm'
							placeholderText='Click to select time'
							showTimeSelect
							showTimeSelectOnly
							isClearable
						/>
					</BootstrapForm.Group>
				</BootstrapForm.Row>
			</fieldset>
			{mode !== 'view' ? (
				<BootstrapForm.Group controlId='buttons'>
					<Button
						variant='danger'
						disabled={!state.task && !state.description}
						onClick={cancel}
					>
						{mode === 'list' ? 'Clear' : 'Cancel'}
					</Button>
					<Button
						type='submit'
						variant='primary'
						form='form'
						disabled={!state.task || !state.description}
					>
						{mode === 'edit' ? 'Save changes' : 'Ok'}
					</Button>
				</BootstrapForm.Group>
			) : (
				<BootstrapForm.Group controlId='buttons'>
					<Button variant='primary' onClick={cancel}>
						Add New Todo
					</Button>
				</BootstrapForm.Group>
			)}
		</BootstrapForm>
	);
};

export default Form;
