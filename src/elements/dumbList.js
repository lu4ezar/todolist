import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import ListItem from './listItem';

const grid = 8;

const StyledList = styled.div`
	padding: ${grid}px;
	width: 250px;
	transition: background 0.2s ease;
	background: ${props => (props.isDraggingOver ? 'skyblue' : 'lightgrey')};
	border-radius: 8px;
`;

const DumbList = props => {
	//убрать обязательно этот массив, сделать иначе:
	const idsArray = Array.from(props.list);
	let itemList = props.list.map(element => element.id);
	//убрать обязательно этот массив, сделать иначе

	const items = props.originalList.map((item, index) => {
		if (itemList.includes(item.id)) {
			return (
				<ListItem
					//status={item.status ? item.status : item.priority}
					delete={() => props.delete(item.id)}
					index={index}
					onClick={props.handleClick}
					item={item}
					key={item.id}
				/>
			);
		}
	});

	return !props.list.length ? (
		<h3>Change filter settings or disable it.</h3>
	) : (
		<Droppable droppableId="droppable">
			{(provided, snapshot) => (
				<StyledList
					ref={provided.innerRef}
					isDraggingOver={snapshot.isDraggingOver}
					{...provided.droppableProps}
				>
					{items}
					{provided.placeholder}
				</StyledList>
			)}
		</Droppable>
	);
};

// DumbList.propTypes = {
//     list: PropTypes.array
// }

// DumbList.DefaultProps = {
//     list: []
// }

export default DumbList;
