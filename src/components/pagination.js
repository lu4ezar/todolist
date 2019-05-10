// @flow
import * as React from 'react';
import PagesView from '../views/paginationView';
import type { Todos } from '../types/todo';

type Props = {
	list: Todos,
	prevProps: Props,
	onChange: (arr: Array<?number>) => void
};

type State = {
	todosPerPage: string,
	pageNumber: number
};

class Pages extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			todosPerPage: '5',
			pageNumber: 1
		};
	}

	componentDidMount() {
		this.updatePaginatedList();
	}

	componentDidUpdate(prevProps: Props) {
		let { pageNumber, todosPerPage } = this.state;
		const list = [...this.props.list];
		const totalPages = this.getTotalPages(list.length, todosPerPage);
		const prevPropsTotalPages = this.getTotalPages(
			prevProps.list.length,
			todosPerPage
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
		if (name === 'todosPerPage') {
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
		const { pageNumber, todosPerPage } = this.state;
		const list = [...this.props.list];
		const iPP =
			todosPerPage === 'all'
				? this.props.list.length
				: Number(todosPerPage);
		const paginatedList = list.slice(
			(pageNumber - 1) * iPP,
			pageNumber * iPP
		);
		const paginatedListIdArray = paginatedList.map(({ id }) => id);
		this.props.onChange(paginatedListIdArray);
	};

	getTotalPages = (listLength: number, todosPerPage: string): number =>
		todosPerPage === 'all' || !listLength
			? 1
			: Math.ceil(listLength / +todosPerPage);

	render() {
		const totalPages = this.getTotalPages(
			this.props.list.length,
			this.state.todosPerPage
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
