import React from 'react';
<<<<<<< HEAD
import styled, { css } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import ButtonPanel from './buttonPanel';
import { listItem } from '../utils/color';

const StyledItem = styled.div`
	userSelect: 'none';
	font-weight: bold;
	line-height: 2;
	min-height: content;
	color: ${listItem.color};
	background: ${listItem.background};
	border: 2px solid ${listItem.border}
	border-radius: 8px;
	padding: 10px;
	width: 70%;
	margin: 0.75em 0;
=======
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
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
	display: flex;
	${props =>
		props.status === 'completed' &&
		css`
<<<<<<< HEAD
			color: ${listItem.completedColor};
			background: ${listItem.completedBackground};
			border-color: ${listItem.completedBorder};
=======
			color: black;
			background: lightgreen;
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
		`}
	${props =>
		props.status === 'expired' &&
		css`
<<<<<<< HEAD
			color: ${listItem.expiredColor};
			background: ${listItem.expiredBackground};
			border-color: ${listItem.expiredBorder};
		`}
	background: ${props =>
		props.isDragging ? listItem.dragBackground : 'initial value'};
	filter: ${props => (props.isDragging ? 'brightness(95%)' : 'brightness(1)')};
`;

const ListItem = ({ item, index, buttonPanelFunctions, onClick }) => (
	<Draggable draggableId={item.id.toString()} index={index}>
=======
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
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
		{(provided, snapshot) => (
			<StyledItem
				ref={provided.innerRef}
				isDragging={snapshot.isDragging}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
<<<<<<< HEAD
				status={item.status ? item.status : item.priority}
				title="DoubleClick to view details"
				onDoubleClick={() => onClick(item.id)}
			>
				{item.task}
				<ButtonPanel functions={buttonPanelFunctions} item={item} />
=======
				status={props.item.status ? props.item.status : props.item.priority}
				title="DoubleClick to Edit"
				onDoubleClick={() => props.onClick(props.item)}
			>
				{props.item.task}
				<StyledButton onClick={props.delete} title="Delete this task">
					{/* <FontAwesomeIcon icon="trash-alt" /> */}x
				</StyledButton>
>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
			</StyledItem>
		)}
	</Draggable>
);

<<<<<<< HEAD
=======
ListItem.propTypes = {
	// item: PropTypes.objectOf(Item).isRequired
};

>>>>>>> e6afdeeb49771ecc0ff7eee46e25ee3538fc0365
export default ListItem;
