import * as React from 'react';
import Todo from '../Todo';
import {
	TextField,
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	Fab,
	Icon,
	Box
} from '@material-ui/core';
import { isExpired } from '../utils/moment';
import Drawer from '../elements/Drawer';

const initialState = new Todo();

const Form = ({ todo, addTodo, updateTodo, mode, submit, cancel }) => {
	const [state, setState] = React.useState(initialState);

	React.useEffect(() => {
		if (todo.id || todo.id === 0) {
			setState(todo);
		} else {
			setState(initialState);
		}
	}, [todo, state.id]);

	const onSubmit = e => {
		e.preventDefault();
		state.status = isExpired(state);
		submit(state);
		setState(initialState);
	};

	const onChange = name => event => {
		setState({ ...state, [name]: event.target.value });
	};

	const handleSelectChange = event => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<Drawer
				side='right'
				open={mode !== 'list'}
				cancel={cancel}
				children={
					<form id='form' onSubmit={onSubmit}>
						<Box m={5} p={5} width='45vw'>
							<fieldset disabled={mode === 'view'}>
								<TextField
									id='task'
									label={`${
										mode === 'edit' ? 'Edit' : 'Add'
									} Todo`}
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
										<MenuItem value='normal'>
											Normal
										</MenuItem>
										<MenuItem value='high'>High</MenuItem>
									</Select>
								</FormControl>
								<br />
								<InputLabel htmlFor='date'>
									Date&Time:
								</InputLabel>
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
								<Fab
									color='secondary'
									size='small'
									disabled={
										!state.task &&
										!state.description &&
										!state.date &&
										!state.time
									}
									onClick={cancel}
								>
									<Icon>close</Icon>
								</Fab>
								{mode !== 'view' && (
									<Fab
										type='submit'
										color='primary'
										size='small'
										form='form'
										disabled={
											!state.task && !state.description
										}
									>
										<Icon>check</Icon>
									</Fab>
								)}
							</div>
						</Box>
					</form>
				}
			/>
		</div>
	);
};

export default Form;
