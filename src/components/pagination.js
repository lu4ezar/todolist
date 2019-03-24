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
	itemsPerPage: string,
	pageNumber: number
};

class Pages extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			itemsPerPage: '5',
			pageNumber: 1
		};
	}

	componentDidMount() {
		this.updatePaginatedList();
	}

	componentDidUpdate(prevProps: Props) {
		let { pageNumber, itemsPerPage } = this.state;
		const list = [...this.props.list];
		const totalPages = this.getTotalPages(list.length, itemsPerPage);
		const prevPropsTotalPages = this.getTotalPages(
			prevProps.list.length,
			itemsPerPage
		);
		/*
		если количество страниц уменьшается в результате удаления записи или 
				включения фильтра - переключаемся на новую страницу
		если увеличивается - на первую
		*/
		if (totalPages !== prevPropsTotalPages) {
			if (totalPages < prevPropsTotalPages) {
				pageNumber = totalPages;
			} else {
				pageNumber = 1;
			}
		}
		this.setState(
			{
				pageNumber
			},
			() => this.updatePaginatedList()
		);
	}

	handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
		let { name, value } = e.target;
		let { pageNumber } = this.state;
		value =
			value === 'ascPage'
				? ++pageNumber
				: value === 'descPage'
				? --pageNumber
				: value;
		let newState = {
			[name]: value
		};
		/* если меняется количество записей на странице,
		то номер страницы меняется на 1 */
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
		const iPP =
			itemsPerPage === 'all'
				? this.props.list.length
				: Number(itemsPerPage);
		const paginatedList = list.slice(
			(pageNumber - 1) * iPP,
			pageNumber * iPP
		);
		const paginatedListIdArray = paginatedList.map(({ id }) => id);
		this.props.onChange(paginatedListIdArray);
	};

	getTotalPages = (listLength: number, itemsPerPage: string): number =>
		itemsPerPage === 'all' || !listLength
			? 1
			: Math.ceil(listLength / +itemsPerPage);

	render() {
		const totalPages = this.getTotalPages(
			this.props.list.length,
			this.state.itemsPerPage
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
