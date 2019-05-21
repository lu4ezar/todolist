// @flow
import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ListItem from '../elements/Todo';
import { ListColor } from '../utils/color';
import styled, { type ReactComponentStyled } from 'styled-components';
import type { Todos } from '../types/todos';

type StyledListPropTypes = {
	isDraggingOver: boolean
};

const StyledList: ReactComponentStyled<StyledListPropTypes> = styled.div`
	max-height: 60vh;
	overflow: auto;
	transition: background 0.2s ease;
	background: ${(props: StyledListPropTypes): string =>
		props.isDraggingOver ? ListColor.dragBackground : ListColor.background};
	border: 2px solid ${ListColor.border};
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1em auto;
	&::after {
		content: '7days';
		color: transparent;
	}
`;

type Props = {
	todos: Todos,
	noListMessage: string,
	handleClick: (id: number) => void,
	deleteTodo: (id: number) => void,
	toggleTodo: (id: number) => void,
	viewTodo: (mode: string) => void,
	editTodo: (id: number) => void,
	onDragEnd: (result: Object) => void
};

const List = ({
	todos,
	noListMessage,
	toggleTodo,
	deleteTodo,
	viewTodo,
	editTodo,
	onDragEnd
}: Props) => {
	const content = noListMessage ? (
		<h3>{noListMessage}</h3>
	) : todos ? (
		todos.map((todo, index) => (
			<ListItem
				key={todo.id}
				index={index}
				todo={todo}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
				viewTodo={viewTodo}
				editTodo={editTodo}
			/>
		))
	) : null;
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<StyledList
						ref={provided.innerRef}
						isDraggingOver={snapshot.isDraggingOver}
						{...provided.droppableProps}
					>
						{content}
						{provided.placeholder}
					</StyledList>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default List;
