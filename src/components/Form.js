import * as React from 'react';
import Todo from '../Todo';
import {
	TextField,
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	Fab,
	Icon
} from '@material-ui/core';
import { isExpired } from '../utils/moment';
import Drawer from '../elements/Drawer';
import Header from '../elements/Header';

const initialState = new Todo();

const Form = ({ todo, mode, submit, closeForm }) => {
	const [state, setState] = React.useState(initialState);
	// check if todo was set to prevent already entered form data from erasing on form close
	React.useEffect(() => {
		if (todo) {
			setState(todo);
		} else {
			setState(initialState);
		}
	}, [todo]);

	const onSubmit = e => {
		e.preventDefault();
		state.status = isExpired(state);
		submit(state);
		setState(initialState);
	};

	const clearForm = () => {
		todo ? setState(todo) : setState(initialState);
	};

	const onChange = name => event => {
		setState({ ...state, [name]: event.target.value });
	};

	const handleSelectChange = event => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const todoWasChanged = todo
		? JSON.stringify(todo) !== JSON.stringify(state)
		: false;

	return (
		<div>
			<Drawer
				side='right'
				open={mode !== 'list'}
				toggleDrawer={closeForm}
				children={
					<form data-testid='form' id='form' onSubmit={onSubmit}>
						<Header
							text={`${
								mode === 'form'
									? 'Add new'
									: mode.charAt(0).toUpperCase() +
									  mode.slice(1)
							} todo`}
						/>
						<fieldset disabled={mode === 'view'}>
							<TextField
								id='task'
								label='Task'
								value={state.task}
								onChange={onChange('task')}
								margin='normal'
								required
							/>
							<br />
							<TextField
								id='description'
								label='Description'
								multiline
								rowsMax='4'
								value={state.description}
								onChange={onChange('description')}
								margin='normal'
								required
							/>
							<br />
							<FormControl>
								<InputLabel htmlFor='priority'>
									Priority
								</InputLabel>
								<Select
									value={state.priority || 'normal'}
									onChange={handleSelectChange}
									inputProps={{
										name: 'priority',
										id: 'priority'
									}}
								>
									<MenuItem value=''>
										<em>None</em>
									</MenuItem>
									<MenuItem value='low'>Low</MenuItem>
									<MenuItem value='normal'>Normal</MenuItem>
									<MenuItem value='high'>High</MenuItem>
								</Select>
							</FormControl>
							<br />
							<InputLabel htmlFor='date'>Date&Time:</InputLabel>
							<TextField
								id='date'
								value={state.date}
								type='date'
								InputLabelProps={{
									shrink: true
								}}
								onChange={onChange('date')}
							/>
							<TextField
								id='time'
								value={state.time}
								type='time'
								InputLabelProps={{
									shrink: true
								}}
								inputProps={{
									step: 300
								}}
								onChange={onChange('time')}
							/>
						</fieldset>
						<div>
							{mode !== 'view' && (
								<>
									<Fab
										color='secondary'
										size='small'
										onClick={clearForm}
										disabled={!todoWasChanged}
									>
										<Icon>close</Icon>
									</Fab>
									<Fab
										data-testid='submit'
										type='submit'
										color='primary'
										size='small'
										form='form'
										disabled={!todoWasChanged}
									>
										<Icon>check</Icon>
									</Fab>
								</>
							)}
						</div>
					</form>
				}
			/>
		</div>
	);
};

export default Form;
