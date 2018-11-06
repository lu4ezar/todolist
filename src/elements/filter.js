import React from "react";
import PropTypes from 'prop-types';
import Input from'./input';
import "./filter.css";

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterIsActive: false,
			priorityFilterStatus: false,
			priorityFilterValue: 'normal',
			completedFilterStatus: false,
			completed: "showCompleted",
			expiredFilterStatus: false,
			expired: "showExpired"
		}
		 this.handleChange = this.handleChange.bind(this);
		 this.filterItem = this.filterItem.bind(this);
		 this.isExpired = this.isExpired.bind(this);
	}

	componentDidMount() {
		let obj = {};
		obj = JSON.parse(localStorage.getItem('filterState'));
		for (const key in obj) {
			const val = obj[key];
			this.setState({
				[key]: val
			});
		}
	}

	componentWillUnmount() {
		localStorage.setItem('filterState', JSON.stringify(this.state))
	}


	handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    }

	isExpired(item) {
        if (item.completeUntilDate) {
           const date = item.completeUntilDate;
           const targetDate = new Date(date);
           const today = new Date(Date.now());
           if (targetDate.getTime() === today.getTime()) {
               const time = item.completeUntilTime;
               const timeNow = `${targetDate.getHours()}:${targetDate.getMinutes()}`;
               return time > timeNow;
           } else {
               return today > targetDate;
           }
       } else {
           return false;
       }
   }

	filterItem(item) {
		// priority filter
		if (this.state.priorityFilterStatus && item.priority !== this.state.priorityFilterValue) {
			return;
		}
		// completed filter
		if (this.state.completedFilterStatus) {
			if (this.state.completed === "showCompleted" && !item.completed) {
				return;
			} else {
				if (this.state.completed === "hideCompleted" && item.completed) {
					return;
				}
			}
		}
		// expired filter
		if (this.state.expiredFilterStatus) {
			if (this.state.expired === "showExpired" && !item.expired) {
				return;
			} else {
				if (this.state.expired === "hideExpired" && item.expired) {
					return;
				}
			}
		}
		return item;
	}

	render() {
		let list = [...this.props.list];

		if (this.state.filterIsActive) {
			list = list.filter(this.filterItem);
		}
		
		const children = React.cloneElement(this.props.children, {list: list});
		return (
			<React.Fragment>
				<fieldset>

					{/* main checkbox */}
					<legend>
						<Input  
							type="checkbox"
							name="filterIsActive"
							checked={this.state.filterIsActive}
							onChange={this.handleChange}
							caption="Filter"
						/>
					</legend>

					{/* priroity filter */}
					<fieldset>
						<legend>
							<Input
								type="checkbox"
								name="priorityFilterStatus"
								checked={this.state.priorityFilterStatus}
								onChange={this.handleChange}
								disabled={!this.state.filterIsActive}
								caption="priority"
							/>
						</legend>
						<fieldset className="filters" disabled={!this.state.filterIsActive  || !this.state.priorityFilterStatus}>
							<Input
								type="radio"
								name="priorityFilterValue"
								value="normal"
								checked={this.state.priorityFilterValue === "normal"}
								onChange={this.handleChange}
								caption="Normal"
								right
							/>
							<Input
								type="radio"
								name="priorityFilterValue"
								value="important"
								checked={this.state.priorityFilterValue === "important"}
								onChange={this.handleChange}
								caption="Important"
								right
							/>
							<Input
								type="radio"
								name="priorityFilterValue"
								value="veryImportant"
								checked={this.state.priorityFilterValue === "veryImportant"}
								onChange={this.handleChange}
								caption="Very Important"
								right
							/>
						</fieldset>
					</fieldset>

					{/* completed filter */}
					<fieldset>
						<legend>
							<Input
								type="checkbox"
								name="completedFilterStatus"
								checked={this.state.completedFilterStatus}
								onChange={this.handleChange}
								disabled={!this.state.filterIsActive}
								caption="completed"
							/>
						</legend>
						<fieldset className="filters" disabled={!this.state.filterIsActive  || !this.state.completedFilterStatus}>
							<Input
								type="radio"
								name="completed"
								value="showCompleted"
								checked={this.state.completed === "showCompleted"}
								onChange={this.handleChange}
								caption="Show only completed"
								right
							/>
							<Input
								type="radio"
								name="completed"
								value="hideCompleted"
								checked={this.state.completed === "hideCompleted"}
								onChange={this.handleChange}
								caption="Do not show completed"
								right
							/>
						</fieldset>
					</fieldset>
					
					{/* expired filter */}
					<fieldset>
						<legend>
							<Input
								type="checkbox"
								name="expiredFilterStatus"
								checked={this.state.expiredFilterStatus}
								onChange={this.handleChange}
								disabled={!this.state.filterIsActive}
								caption="expired"
							/>
						</legend>
						<fieldset className="filters" disabled={!this.state.filterIsActive  || !this.state.expiredFilterStatus}>
							<Input
								type="radio"
								name="expired"
								value="showExpired"
								checked={this.state.expired === "showExpired"}
								onChange={this.handleChange}
								caption="Show only expired"
								right
							/>
							<Input
								type="radio"
								name="expired"
								value="hideExpired"
								checked={this.state.expired === "hideExpired"}
								onChange={this.handleChange}
								caption="Do not show expired"
								right
							/>
						</fieldset>
					</fieldset>
				</fieldset>
				{children}
			</React.Fragment>
		)
	}
}

Filter.propTypes = {
    list: PropTypes.array
}

export default Filter;
