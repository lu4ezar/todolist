import React from 'react';
import PropTypes from 'prop-types';
import { Label, Segment } from 'semantic-ui-react';
import styled, { css } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBackspace,
	faMinus,
	faTimesCircle,
	faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import Item from '../Item';

library.add(faTrashAlt);

const grid = 10;

const StyledItem = styled.div`
	userSelect: "none";
	background: lightblue;
	border-radius: 8px;
	padding: ${grid}px;
	margin: ${grid / 2}px 0 ${grid / 2}px 0;
	display: flex;
	${props =>
		props.status === 'completed' &&
		css`
			color: black;
			background: lightgreen;
		`}
	${props =>
		props.status === 'expired' &&
		css`
			color: blue;
			background: palevioletred;
		`}
	background: ${props => (props.isDragging ? 'orange' : 'initial value')};
	filter: ${props => (props.isDragging ? 'brightness(95%)' : 'brightness(1)')}
`;

const StyledButton = styled.button`
	border-radius: 8px;
	background-color: inherit;
	margin-left: auto;
	&:hover {
		cursor: pointer;
		filter: brightness(90%);
	}
	border: none;
	outline: none;
`;

const ListItem = props => (
	<Draggable draggableId={props.item.id.toString()} index={props.index}>
		{(provided, snapshot) => (
			<StyledItem
				ref={provided.innerRef}
				isDragging={snapshot.isDragging}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				status={props.item.status ? props.item.status : props.item.priority}
				title="DoubleClick to Edit"
				onDoubleClick={() => props.onClick(props.item)}
			>
				{props.item.task}
				<StyledButton onClick={props.delete} title="Delete this task">
					{/* <FontAwesomeIcon icon="trash-alt" /> */}x
				</StyledButton>
			</StyledItem>
		)}
	</Draggable>
);

ListItem.propTypes = {
	// item: PropTypes.objectOf(Item).isRequired
};

export default ListItem;
