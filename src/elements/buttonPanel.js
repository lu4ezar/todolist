import React from 'react';
<<<<<<< HEAD
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import { Button } from 'semantic-ui-react';
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
import PropTypes from 'prop-types';
import Button from '../elements/styledButton';

<<<<<<< HEAD
const ButtonPanel = ({ functions, item, mode }) => {
	const { view, edit, deleteItem, completed } = functions;
	const { id } = item;
	return (
		<ButtonGroup size='sm' className='ml-auto'>
			{mode !== 'view' && (
				<Button title='View details' onClick={() => view(id)}>
					<FontAwesomeIcon icon='eye' />
				</Button>
			)}
			<Button
				title='Edit'
				onClick={() => edit(id)}
				disabled={item.status === 'completed'}
			>
				<FontAwesomeIcon icon='pencil-alt' />
			</Button>
			<Button
				title='Mark as Completed'
				onClick={() => completed(id)}
				disabled={item.status === 'completed'}
			>
				<FontAwesomeIcon icon='check' />
			</Button>
			<Button title='Delete Item' onClick={() => deleteItem(id)}>
				<FontAwesomeIcon icon='trash' />
			</Button>
		</ButtonGroup>
=======
const ButtonPanel = props => {
	return (
		<React.Fragment>
			<button onClick={props.edit}>EDIT</button>
			<button onClick={props.delete}>DELETE</button>
		</React.Fragment>
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
	);
};

ButtonPanel.propTypes = {
<<<<<<< HEAD
	item: PropTypes.object,
	view: PropTypes.func,
	edit: PropTypes.func,
	completed: PropTypes.func,
=======
	edit: PropTypes.func,
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
	delete: PropTypes.func
};

export default ButtonPanel;
