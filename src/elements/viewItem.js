import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './buttonPanel';
import ModalWindow from './modalWindow';

const ItemView = props => {
	const { item, mode, functions } = props;
	return (
		<ModalWindow
			onHide={props.close}
			title={item.task}
			body={item.description}
			footer={
				<ButtonPanel item={item} functions={functions} mode={mode} />
			}
		/>
	);
};

ItemView.propTypes = {
	item: PropTypes.object.isRequired,
	functions: PropTypes.object.isRequired
};
export default ItemView;
