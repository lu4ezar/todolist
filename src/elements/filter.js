// @ts-check
import React from "react";
import PropTypes from "prop-types";
import "./filter.css";
import {
	Dropdown,
	Label,
	Checkbox,
	SegmentGroup,
} from "semantic-ui-react";

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterIsActive: false,
			priorityFilterStatus: false,
			priorityFilterValue: ["normal"],
			completedFilterStatus: false,
			completed: true,
			expiredFilterStatus: false,
			expired: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.filterItem = this.filterItem.bind(this);
		this.countItems = this.countItems.bind(this);
	}

	componentDidMount() {
		let obj = {};
		obj = JSON.parse(localStorage.getItem("filterState"));
		for (const key in obj) {
			const val = obj[key];
			this.setState({
				[key]: val
			});
		}
	}

	componentWillUnmount() {
		localStorage.setItem("filterState", JSON.stringify(this.state));
	}

	//tumblers
	/*checkUnchecked() {
		this.setState({
			[check]: true
		});
	}
	uncheckChecked() {
		this.setState({
			[check]: false
		});
	}*/

	countItems(property, value, list = this.props.list) {
		const count = list.filter(item => item[property] === value);
		return count.length;
	}

	filterItem(item) {
		let { priority, status } = item;
		let result = false;
		if (this.state.priorityFilterStatus) {
			if (!this.state.priorityFilterValue.includes(priority)) {
				return false;
			}
			result = true;
		}
		if (this.state.completedFilterStatus) {
			if (status === "completed") {
				return this.state.completed;
			}
			result = !this.state.completed;
		}
		if (this.state.expiredFilterStatus) {
			if (status === "expired") {
				return this.state.expired;
			}
			result = !this.state.expired;
		}
		return result;
	}

	/*componentDidUpdate() {
		// update after item edit
	}*/

	handleChange(data) {
		let { name, value, type, checked } = data;
		value = type === "checkbox" ? checked : value;
		this.setState({
			[name]: value
		});
	}

	checkLabel = (prop) => {
		this.setState(
			state => ({
				[prop]: !state.prop
			})
		);
	}

	renderLabel = (text, value) => (
		<Label>
			{text}
			<Label circular color="olive">
				{this.countItems("priority", value)}
			</Label>
		</Label>
	);

	render() {
		let list = [...this.props.list];
		if (
			this.state.filterIsActive &&
			(this.state.priorityFilterStatus ||
				this.state.completedFilterStatus ||
				this.state.expiredFilterStatus)
		) {
			list = list.filter(this.filterItem);
		}
		let children;
		if (React.isValidElement(this.props.children)) {
			children = React.cloneElement(this.props.children, {
				list: list
			});
		}
		//const normal = this.countItems("priority", "normal");
		//const important = this.countItems("priority", "important");
		//const veryImportant = this.countItems("priority", "veryImportant");
		const completed = this.countItems("status", "completed", this.props.list);
		const expired = this.countItems("status", "expired", this.props.list);
		const dropdownOptions = [
			{
				key: "normal",
				text: "Normal",
				value: "normal",
				label: this.renderLabel("", "normal")
			},
			{
				key: "important",
				text: "Important",
				value: "important",
				label: this.renderLabel("", "important")
			},
			{
				key: "veryImportant",
				text: "Very important",
				value: "veryImportant",
				label: this.renderLabel("", "veryImportant")
			}
		];

		return (
			<React.Fragment>
				<h3>LENGTH: {list.length}</h3>
				{/* <Segment> */}
					<SegmentGroup compact>
						<Checkbox
							label="Filter"
							name="filterIsActive"
							checked={this.state.filterIsActive}
							onChange={(e, data) => this.handleChange(data)}
							toggle
						/>
					{/* </SegmentGroup>
					<SegmentGroup compact> */}
						<Checkbox
							label="Priority"
							name="priorityFilterStatus"
							value="priorityFilterStatus"
							checked={this.state.priorityFilterStatus}
							onChange={(e, data) => this.handleChange(data)}
							disabled={!this.state.filterIsActive}
							toggle
						/>
						<Dropdown
							name="priorityFilterValue"
							placeholder="Priority"
							options={dropdownOptions}
							disabled={
								!this.state.filterIsActive ||
								!this.state.priorityFilterStatus
							}
							onChange={(e, data) => this.handleChange(data)}
							multiple
							selection
							value={this.state.priorityFilterValue}
							//renderLabel={({ text, value }) => this.renderLabel(text, value)}
						/>
					{/* </SegmentGroup>

					<SegmentGroup compact> */}
						<Checkbox
							label="completed"
							name="completedFilterStatus"
							value="completedFilterStatus"
							checked={this.state.completedFilterStatus}
							onChange={(e, data) => this.handleChange(data)}
							disabled={!this.state.filterIsActive}
							toggle
						/>
						<Label content={completed} circular color="olive" />
						<Label>
							hide
							<Checkbox
								name="completed"
								value="completed"
								checked={this.state.completed}
								onChange={(e, data) => this.handleChange(data)}
								disabled={!this.state.completedFilterStatus}
								toggle
							/>
							<Label>show</Label>
						</Label>
					{/* </SegmentGroup>


					<SegmentGroup compact> */}
						<Checkbox
							label="expired"
							name="expiredFilterStatus"
							checked={this.state.expiredFilterStatus}
							onChange={(e, data) => this.handleChange(data)}
							disabled={!this.state.filterIsActive}
							toggle
						/>
						<Label
							circular
							color="olive"
							content={expired}
						/>
						<Label>
							hide
							<Checkbox
								name="expired"
								checked={this.state.expired}
								onChange={(e, data) => this.handleChange(data)}
								disabled={!this.state.expiredFilterStatus}
								fitted
								toggle
							/>
							<Label>
								show
							</Label>
						</Label>
					</SegmentGroup>
				{/* </Segment> */}
				{children}
			</React.Fragment>
		);
	}
}

Filter.propTypes = {
	list: PropTypes.array.isRequired
};

export default Filter;
