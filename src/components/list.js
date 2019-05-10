// @flow
import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ListItem from '../elements/Todo';
import { ListColor } from '../utils/color';
import styled, { type ReactComponentStyled } from 'styled-components';
import type { Todos } from '../types/todo';

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
	list: Todos,
	noListMessage: string,
	handleClick: (id: number) => void,
	delete: (id: number) => void,
	btnFunc: {
		view: (id: number) => void,
		editTodo: (id: number) => void,
		deleteTodo: (id: number) => void,
		completed: (id: number) => void
	}
};

const List = ({ list, noListMessage, btnFunc }: Props) => {
	const content = noListMessage ? (
		<h3>{noListMessage}</h3>
	) : list ? (
		list.map((todo, index) => (
			<ListItem
				key={todo.id}
				index={index}
				todo={todo}
				buttonFunctions={btnFunc}
			/>
		))
	) : null;
	return (
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
	);
};

export default List;
