// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import ListItem from '../elements/listItem';
import { list } from '../utils/color';
import Item from '../Item';

const StyledList = styled.div`
	max-height: 60vh;
	overflow: auto;
	transition: background 0.2s ease;
	background: ${props =>
		props.isDraggingOver ? list.dragBackground : list.background};
	border: 2px solid ${list.border};
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
	list: Array<Item>,
	noListMessage: string,
	handleClick: (id: number) => void,
	delete: (id: number) => void,
	btnFunc: {
		view: (id: number) => void,
		editItem: (id: number) => void,
		deleteItem: (id: number) => void,
		completed: (id: number) => void
	}
};

const List = ({ list, noListMessage, btnFunc }: Props) => {
	const content = noListMessage ? (
		<h3>{noListMessage}</h3>
	) : list ? (
		list.map((item, index) => (
			<ListItem
				key={item.id}
				index={index}
				item={item}
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
