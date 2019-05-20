import React from 'react';
import styled, { css } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import ButtonPanel from './buttonPanel';
import { TodoColor } from '../utils/color';

const StyledTodo = styled.div`
	userSelect: 'none';
	font-weight: bold;
	line-height: 2;
	min-height: fit-content;
	color: ${TodoColor.color};
	background: ${TodoColor.background};
	border: 2px solid ${TodoColor.border}
	border-radius: 8px;
	padding: 10px;
	width: 70%;
	margin: 0.75em 0;
	display: flex;
	${props =>
		props.status === 'completed' &&
		css`
			color: ${TodoColor.completedColor};
			background: ${TodoColor.completedBackground};
			border-color: ${TodoColor.completedBorder};
		`}
	${props =>
		props.status === 'expired' &&
		css`
			color: ${TodoColor.expiredColor};
			background: ${TodoColor.expiredBackground};
			border-color: ${TodoColor.expiredBorder};
		`}
	background: ${props =>
		props.isDragging ? TodoColor.dragBackground : 'initial value'};
	filter: ${props => (props.isDragging ? 'brightness(95%)' : 'brightness(1)')};
`;

const ListItem = ({
	todo,
	index,
	buttonFunctions,
	toggleTodo,
	deleteTodo,
	viewTodo,
	setTodo
}) => (
	<Draggable draggableId={todo.id.toString()} index={index}>
		{(provided, snapshot) => (
			<StyledTodo
				ref={provided.innerRef}
				isDragging={snapshot.isDragging}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				status={todo.status ? todo.status : todo.priority}
				title="DoubleClick to view details"
				onDoubleClick={() => buttonFunctions.view(todo.id)}
			>
				{todo.task}
				<ButtonPanel
					todo={todo}
					toggle={toggleTodo}
					del={deleteTodo}
					view={viewTodo}
					setTodo={setTodo}
				/>
			</StyledTodo>
		)}
	</Draggable>
);

export default ListItem;
