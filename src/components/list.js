import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import ListItem from '../elements/listItem';
import { list } from '../utils/color';

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
	};
`;

const List = props => {
	// массив id-значений отфильтрованного списка сопоставляется с оригинальным списком,
	// чтобы получить реальный текущий индекс элемента для react-beautiful-dnd
	const itemList = props.list.map(element => element.id);
	const items = props.originalList.map((item, index) => {
		if (itemList.includes(item.id)) {
			return (
				<ListItem
					key={item.id}
					index={index}
					item={item}
					onClick={props.handleClick}
					buttonPanelFunctions={props.btnFunc}
				/>
			);
		}
		return null;
	});

	return !props.originalList.length ? (
		<h3>Your list is empty</h3>
	) : (
		<Droppable droppableId='droppable'>
			{(provided, snapshot) => (
				<StyledList
					ref={provided.innerRef}
					isDraggingOver={snapshot.isDraggingOver}
					{...provided.droppableProps}
				>
					{props.list.length ? (
						<>
							{items}
							{provided.placeholder}
						</>
					) : (
						<h3>Change filter settings or disable it.</h3>
					)}
				</StyledList>
			)}
		</Droppable>
	);
};

List.propTypes = {
	list: PropTypes.array
};

export default List;
