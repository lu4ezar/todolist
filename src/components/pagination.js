// @flow
import * as React from 'react';
import Item from '../Item';
import PagesView from '../views/paginationView';

type Props = {
	list: Array<Item>,
	prevProps: Props,
	onChange: (arr: Array<?number>) => void
};

type State = {
	itemsPerPage: number,
	pageNumber: number
};

class Pages extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			itemsPerPage: 5,
			pageNumber: 1
		};
	}

	componentDidMount() {
		this.updatePaginatedList();
	}
	/*

*1 - если во время удаления записи itemsPerPage был в положении max (= arr.length), 
	то itemsPerPage уменьшается на 1 чтобы не выходить за допустимые пределы

*2 - если удаляемая запись была на текущей странице последней,
	то (pageNumber - 1) чтобы не отображалась пустая 
*/

	componentDidUpdate(prevProps: Props) {
		if (this.props.list !== prevProps.list) {
			this.updatePaginatedList();
		}
	}

	// TODO: оптимизировать ?
	handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
		let { name, value } = e.target;
		let { pageNumber } = this.state;
		value =
			value === 'ascPage'
				? ++pageNumber
				: value === 'descPage'
				? --pageNumber
				: parseInt(value);
		let newState = {
			[name]: value
		};
		// если меняется количество записей на странице, то номер страницы меняется на 1
		if (name === 'itemsPerPage') {
			newState = {
				...newState,
				pageNumber: 1
			};
		}
		this.setState(
			{
				...newState
			},
			() => this.updatePaginatedList()
		);
	};

	updatePaginatedList = () => {
		const { pageNumber, itemsPerPage } = this.state;
		const list = [...this.props.list];
		const paginatedList = list.slice(
			(pageNumber - 1) * itemsPerPage,
			pageNumber * itemsPerPage
		);
		const paginatedListIdArray = paginatedList.map(({ id }) => id);
		this.props.onChange(paginatedListIdArray);
	};

	render() {
		const totalPages = Math.ceil(
			this.props.list.length / this.state.itemsPerPage
		);
		return (
			<PagesView
				{...this.state}
				totalPages={totalPages}
				handleChange={this.handleChange}
				listLength={this.props.list.length}
			/>
		);
	}
}

export default Pages;
