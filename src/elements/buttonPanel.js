import React from 'react';
import PropTypes from 'prop-types';
import { Icon, IconButton, Toolbar } from '@material-ui/core';

const ButtonPanel = ({ todo, mode, toggle, deleteTodo, showTodo }) => {
	const { id, status } = todo;
	return (
		<Toolbar style={{ marginLeft: 'auto' }}>
			{mode !== 'view' && (
				<IconButton
					title='View details'
					onClick={() => showTodo(id, 'view')}
				>
					<Icon>remove_red_eye</Icon>
				</IconButton>
			)}
			<IconButton
				title='Edit'
				onClick={() => showTodo(id, 'edit')}
				disabled={status === 'completed'}
			>
				<Icon>edit</Icon>
			</IconButton>
			<IconButton
				title='Mark as Completed'
				onClick={() => toggle(id)}
				disabled={status === 'completed'}
			>
				{todo.status === 'completed' ? (
					<Icon>check_box</Icon>
				) : (
					<Icon>check_box_outline_blank</Icon>
				)}
			</IconButton>
			<IconButton title='Delete Todo' onClick={() => deleteTodo(id)}>
				<Icon>delete</Icon>
			</IconButton>
		</Toolbar>
	);
};

ButtonPanel.propTypes = {
	showTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	toggle: PropTypes.func.isRequired,
	todo: PropTypes.object.isRequired,
	mode: PropTypes.string
};

export default ButtonPanel;
