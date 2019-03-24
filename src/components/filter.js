// @flow
import * as React from 'react';
import type { Item } from '../Item';
import FilterView from '../views/filterView';

type Props = {
	list: Array<Item>,
	prevProps: Props,
	item: Item,
	onChange: (arr: ?Array<?number>) => void,
	values: Array<string>
};

type State = {
	filterIsActive: boolean,
	priorityFilterStatus: boolean,
	priorityFilterValue: Array<string>,
	completedFilterStatus: boolean,
	completed: boolean,
	expiredFilterStatus: boolean,
	expired: boolean
};

class Filter extends React.Component<Props, State> {
	state = {
		filterIsActive: false,
		priorityFilterStatus: false,
		priorityFilterValue: ['normal'],
		completedFilterStatus: false,
		completed: true,
		expiredFilterStatus: false,
		expired: true
	};

	componentDidUpdate(prevProps: Props) {
		if (this.props.list !== prevProps.list && this.state.filterIsActive) {
			this.updateFilteredList();
		}
	}

	countItems = (
		property: string,
		value: string,
		list: Array<Item> = this.props.list
	): number => {
		list = list.filter(
			(item: Class<Item>): boolean => {
				return item[property] === (value: string);
			}
		);
		return list.length;
	};

	filterList = (list: Array<Item>): Array<Item> => {
		if (
			this.state.priorityFilterStatus ||
			this.state.completedFilterStatus ||
			this.state.expiredFilterStatus
		) {
			list = list.filter(this.filterItem);
		}
		return list;
	};

	filterItem = (item: Class<Item>): boolean => {
		let { priority, status } = item;
		let result = false;
		if (this.state.priorityFilterStatus) {
			if (!this.state.priorityFilterValue.includes(priority)) {
				return false;
			}
			result = true;
		}
		if (this.state.completedFilterStatus) {
			if (status === 'completed') {
				return this.state.completed;
			}
			result = !this.state.completed;
		}
		if (this.state.expiredFilterStatus) {
			if (status === 'expired') {
				return this.state.expired;
			}
			result = !this.state.expired;
		}
		return result;
	};

	updateFilteredList = (): void => {
		const list: Array<Item> = [...this.props.list];
		const filteredList: ?Array<Item> = this.state.filterIsActive
			? this.filterList(list)
			: null;
		const filteredListIdArray: ?Array<?number> = filteredList
			? filteredList.map(
					({ id }): number | null => {
						if (id != null) {
							return id;
						}
						return null;
					}
			  )
			: null;
		this.props.onChange(filteredListIdArray);
	};

	handleSelectChange = (values: { value: string, label: string }[]): void => {
		const arr = values.map(({ value }) => value);
		this.setState(
			{
				priorityFilterValue: arr
			},
			() => this.updateFilteredList()
		);
	};

	onSwitch = (checked: boolean, event: ?Event, id: string): void => {
		this.setState(
			{
				[id]: checked
			},
			() => this.updateFilteredList()
		);
	};

	render() {
		let list = [...this.props.list];
		const completedCount = this.countItems('status', 'completed', list);
		const expiredCount = this.countItems('status', 'expired', list);
		return (
			<FilterView
				{...this.state}
				onSwitch={this.onSwitch}
				handleChange={this.handleSelectChange}
				completedCount={completedCount}
				expiredCount={expiredCount}
			/>
		);
	}
}

export default Filter;
