import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './buttonPanel';
import ModalWindow from './modalWindow';

const TodoView = props => {
	const { todo, mode, functions } = props;
	return (
		<ModalWindow
			onHide={props.close}
			title={todo.task}
			body={todo.description}
			footer={
				<ButtonPanel todo={todo} functions={functions} mode={mode} />
			}
		/>
	);
};

TodoView.propTypes = {
	todo: PropTypes.object.isRequired,
	functions: PropTypes.object.isRequired
};
export default TodoView;
