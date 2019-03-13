import Modal from 'react-bootstrap/Modal';
import React from 'react';
import PropTypes, { string } from 'prop-types';

const ModalWindow = props => {
	return (
		<Modal onHide={props.onHide} show centered>
			<Modal.Header closeButton>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{props.body}</Modal.Body>
			<Modal.Footer>{props.footer}</Modal.Footer>
		</Modal>
	);
};

ModalWindow.propTypes = {
	close: PropTypes.func,
	title: string,
	body: PropTypes.oneOfType([string, PropTypes.element]),
	footer: PropTypes.oneOfType([string, PropTypes.element])
};

export default ModalWindow;
