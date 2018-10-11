import React from 'react';
import Record from './record';
import Filter from './filter';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterOn: false,
			filterValue: 'normal'
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	render() {
		const list = this.props.list.map(function (item, i) {
			if (this.state.filterOn && (item.priority !== this.state.filterValue)) {
				return;
			}
			return (
				<Record
					key={item.name}
					item={item}
					className={this.props.currentItem === i ? "editMode " : ""}
					delete={() => this.props.delete(i)}
					edit={() => this.props.edit(i)}
					up={() => this.props.up(i)}
					down={() => this.props.down(i)}
					completed={() => this.props.completed(i)}
				/>
			)
		}.bind(this));
		
		return (
			<div>
				<Filter filterOn={this.state.filterOn} handleChange={this.handleChange} filterValue={this.state.filterValue} />
				<ul>
					{list}
				</ul>
			</div>
		);
	}
}

export default List;