// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import './list.css';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		// this.handleChange = this.handleChange.bind(this);
		this.isExpired = this.isExpired.bind(this);
		this.changePage = this.changePage.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	/*handleChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value,
			pageNumber: 0
		});
	}*/

	 isExpired(item) {
		 if (item.completeUntilDate) {
			const date = item.completeUntilDate;
			const targetDate = new Date(date);
			const today = new Date(Date.now());
			// console.log(`targetDate: ${targetDate} today: ${today}`);
			// console.log(`targetDate: ${targetDate.getTime()} today: ${today.getTime()}`);
			if (targetDate.getTime() === today.getTime()) {
				const time = item.completeUntilTime;
				const timeNow = `${targetDate.getHours()}:${targetDate.getMinutes()}`;
				// console.log(`timeNow: ${timeNow}`);
				return time > timeNow;
			} else {
				// console.log(`comparing dates date = ${date} target = ${targetDate} today = ${today} today>target: ${today > targetDate}`);
				return today > targetDate;
			}
		} else {
			return false;
		}
	}
	
	changePage(i) {
        if (this.state.pageNumber === i) {
            return;
        }
        this.setState({
            pageNumber: i
        });
	};
	
	handleClick(e, index) {
		e.stopPropagation();
		console.log(e.target.type, index);
		this.props.handleClick(index);
	}

	getClassName(item) {
		let className = item.priority;
		if (item.completed) {
			return className += ' completed';
		}
		if (this.isExpired(item)) {
			return className += ' expired';
		}		
		return className;
	}

	/*render() {
		const length = this.props.list.length;
		if (!length) {
			return 	<h3>Your list is empty</h3>
		} else {
			const listStart = this.state.pageNumber * this.state.recordsPerPage;
			const listEnd = listStart + this.state.recordsPerPage;
			let list = [...this.props.list];
			const listLength = list.length;
			const listToShow = (
				this.state.filterOn
					? list.filter(item => item.priority === this.state.filterValue) 
					: list
				)
				.slice(listStart, listEnd)
				.map ((item,index) => {
					console.log(`EXPIRED + ${index} + ${this.getClassName(item)}`);
					const listItem = (
						<li className={this.getClassName(item)} onClick={() => this.props.handleClick((index))}>
							<div className="listItem">
								<h3>{item.task}</h3>
								<h4>{item.description}</h4>
							</div>
						</li>
					);
					return listItem;
				}
			);
			return (
				<div>
					<Pages
						recordsPerPage={this.state.recordsPerPage}
						currentPage={this.state.pageNumber}
						listLength={listLength}
						onChange={this.handleChange}
						changePage={this.changePage}
					/>
					<Filter filterOn={this.state.filterOn} handleChange={this.handleChange} filterValue={this.state.filterValue} />
					{list.length ? <ul>{listToShow}</ul> : <h3>change filter settings</h3>}
				</div>
			);
		}
	}*/
	render() {
		let items = [];
		if (!this.props.list.length) {
			return 	<h3>Your list is empty</h3>
		} else {
			items = this.props.list.map(( item, index) => {
				const className = this.getClassName(item);
				return (
					<li key={index} className={className} onClick={() => this.props.handleClick(index)}>
						<h3>{item.task}</h3>
						<h4>{item.description}</h4>
					</li>
				);
			});
			console.log(`after map: ${items.length}`);

			if (this.props.filter) {
				console.log(`if ${this.props.filter}`);
				items = items.filter(item => item.priority === this.props.filterValue)
			}
			if (!items.length) {
				console.log(`if no length ${this.props.filter}`);

				return 	<h3>Change filter settings</h3>
			} else {
				console.log(`else no length ${this.props.filter} ${this.props.pageNumber} * ${this.props.recordsPerPage}`);

				const listStart = this.props.pageNumber * this.props.recordsPerPage;
				const listEnd = listStart + this.props.recordsPerPage;
				items = items.slice(listStart, listEnd);
				console.log(`else length ${this.props.filter} ${this.props.pageNumber} * ${this.props.recordsPerPage} and ${items.length}`);

			}
			console.log(`* ${items.length}`);

		}
		return (
			<div>
				{this.props.children}
				<ul>{items}</ul>
			</div>
		)
	}
}

List.propTypes = {
	list: PropTypes.array.isRequired,
	filter: PropTypes.bool.isRequired,
	pageNumber: PropTypes.number.isRequired,
	recordsPerPage: PropTypes.number.isRequired
}

export default List;