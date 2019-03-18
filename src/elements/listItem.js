import React from 'react';
import styled, { css } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import ButtonPanel from './buttonPanel';
import { listItem } from '../utils/color';

const StyledItem = styled.div`
	userSelect: 'none';
	font-weight: bold;
	line-height: 2;
	min-height: fit-content;
	// min-width: fit-content;
	color: ${listItem.color};
	background: ${listItem.background};
	border: 2px solid ${listItem.border}
	border-radius: 8px;
	padding: 10px;
	width: 70%;
	margin: 0.75em 0;
	display: flex;
	${props =>
		props.status === 'completed' &&
		css`
			color: ${listItem.completedColor};
			background: ${listItem.completedBackground};
			border-color: ${listItem.completedBorder};
		`}
	${props =>
		props.status === 'expired' &&
		css`
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
		{(provided, snapshot) => (
			<StyledItem
				ref={provided.innerRef}
				isDragging={snapshot.isDragging}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				status={item.status ? item.status : item.priority}
				title="DoubleClick to view details"
				onDoubleClick={() => onClick(item.id)}
			>
				{item.task}
				<ButtonPanel functions={buttonPanelFunctions} item={item} />
			</StyledItem>
		)}
	</Draggable>
);

export default ListItem;
