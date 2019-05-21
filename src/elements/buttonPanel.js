import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Button from '../elements/styledButton';
import Container from 'react-bootstrap/Container';

const ButtonPanel = ({
	todo,
	mode,
	toggle,
	deleteTodo,
	viewTodo,
	editTodo
}) => {
	const { id, status } = todo;
	return (
		<Container className="d-flex justify-content-end align-self-center pr-0">
			<ButtonGroup size="sm">
				{mode !== 'view' && (
					<Button title="View details" onClick={() => viewTodo(id)}>
						<FontAwesomeIcon icon="eye" />
					</Button>
				)}
				<Button
					title="Edit"
					onClick={() => editTodo(id)}
					disabled={status === 'completed'}
				>
					<FontAwesomeIcon icon="pencil-alt" />
				</Button>
				<Button
					title="Mark as Completed"
					onClick={() => toggle(id)}
					disabled={status === 'completed'}
				>
					<FontAwesomeIcon icon="check" />
				</Button>
				<Button title="Delete Todo" onClick={() => deleteTodo(id)}>
					<FontAwesomeIcon icon="trash" />
				</Button>
			</ButtonGroup>
		</Container>
	);
};

ButtonPanel.propTypes = {
	viewTodo: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	toggle: PropTypes.func.isRequired,
	todo: PropTypes.object.isRequired,
	mode: PropTypes.string
};

export default ButtonPanel;
