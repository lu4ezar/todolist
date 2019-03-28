import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Button from '../elements/styledButton';
import Container from 'react-bootstrap/Container';

const ButtonPanel = ({ functions, item, mode }) => {
	const { view, edit, deleteItem, completed } = functions;
	const { id, status } = item;
	return (
		<Container className="d-flex justify-content-end align-self-center pr-0">
			<ButtonGroup size="sm">
				{mode !== 'view' && (
					<Button title="View details" onClick={() => view(id)}>
						<FontAwesomeIcon icon="eye" />
					</Button>
				)}
				<Button
					title="Edit"
					onClick={() => edit(id)}
					disabled={status === 'completed'}
				>
					<FontAwesomeIcon icon="pencil-alt" />
				</Button>
				<Button
					title="Mark as Completed"
					onClick={() => completed(id)}
					disabled={status === 'completed'}
				>
					<FontAwesomeIcon icon="check" />
				</Button>
				<Button title="Delete Item" onClick={() => deleteItem(id)}>
					<FontAwesomeIcon icon="trash" />
				</Button>
			</ButtonGroup>
		</Container>
	);
};

ButtonPanel.propTypes = {
	functions: PropTypes.shape({
		view: PropTypes.func.isRequired,
		edit: PropTypes.func.isRequired,
		deleteItem: PropTypes.func.isRequired,
		completed: PropTypes.func.isRequired
	}).isRequired,
	item: PropTypes.object.isRequired,
	mode: PropTypes.string
};

export default ButtonPanel;
