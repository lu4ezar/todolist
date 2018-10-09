import React from 'react';
import Record from './record';

const List = (props) => {
	const list = props.list.map(
		(item, i) => {
			return (
				<Record
					key={item.name}
					item={item}
					className={props.currentItem === i ? "editMode " : ""}
					delete={() => props.delete(i)}
					edit={() => props.edit(i)}
					up={() => props.up(i)}
					down={() => props.down(i)}
					completed={() => props.completed(i)}
				/>
			);
		}
	);
	return (<ul>{list}</ul>);
}

export default List;