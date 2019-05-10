// @ts-check
import React from 'react';
import ReactForm from './form';
import List from './list';
import View from '../elements/viewTodo';
import Filter from './filter';
import Pagination from './pagination';
import Todo from '../Todo';
import { DragDropContext } from 'react-beautiful-dnd';
import Layout from '../layout/layout';
import moment from 'moment';
import { isExpired } from '../utils/utils';
import update from 'immutability-helper';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			filteredList: null,
			paginatedList: [],
			todo: {},
			mode: 'list'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// есть лишнее
	componentDidMount() {
		try {
			this.getDataFromLocalStorage();
		} catch (err) {
			let list = this.getTodos(12);
			this.setState({
				list
			});
		}
		window.addEventListener('beforeunload', this.saveDataToLocalStorage);
	}

	componentWillUnmount() {
		window.removeEventListener('beforeunload', this.saveDataToLocalStorage);
	}

	getDataFromLocalStorage = () => {
		const list = JSON.parse(localStorage.getItem('list'));
		// 'normalize' data: check for expired todos and
		// convert date/time strings into date objects
		for (let i = 0; i < list.length; i++) {
			const todo = list[i];
			let { status, date, time } = todo;
			if (status !== 'completed') {
				todo.status = isExpired(todo);
			}
			if (date) {
				todo.date = moment(date).toDate();
			}
			if (time) {
				todo.time = moment(time).toDate();
			}
		}
		this.setState({
			list
		});
	};

	saveDataToLocalStorage = () => {
		localStorage.clear();
		if (this.state.list.length) {
			localStorage.setItem('list', JSON.stringify(this.state.list));
		}
	};

	handleChange(event) {
		const target = event.target;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(obj) {
		let list;
		if (obj.status !== 'completed') {
			obj.status = isExpired(obj);
		}
		// if mode === 'form' => we're adding a new todo,
		// so we need to assign unique id and add it to the list
		// 'else' means it was 'edit mode', so we're updating existing todo
		if (this.state.mode === 'form') {
			obj.id = this.getUniqueId();
			list = update(this.state.list, { $unshift: [obj] });
		} else {
			const index = this.getTodoIndexById(obj.id);
			list = update(this.state.list, { [index]: { $set: obj } });
		}
		this.setState(
			{
				list
			},
			() => this.handleCloseModal()
		);
	}

	handleClickListItem = id => {
		const todo = this.getTodoById(id);
		this.setState({
			todo,
			mode: 'view'
		});
	};

	handleCloseModal = () => {
		this.setState({
			mode: 'list',
			todo: {}
		});
	};

	getFilteredList = arr => {
		let list = [...this.state.list];
		list =
			arr && arr.length ? list.filter(({ id }) => arr.includes(id)) : arr;
		this.setState({
			filteredList: list
		});
	};

	getPaginatedList = arr => {
		let list = this.state.filteredList
			? [...this.state.filteredList]
			: [...this.state.list];
		list = list.filter(({ id }) => {
			return arr.includes(id);
		});
		this.setState({
			paginatedList: list
		});
	};

	clearList = () => this.setState({ list: [] });

	render() {
		const { list, filteredList, paginatedList, todo, mode } = this.state;
		const forPagination = filteredList ? filteredList : list;
		const noListMessage = !list.length
			? 'Your list is empty'
			: filteredList && !filteredList.length
			? 'Change filter settings or disable it'
			: null;
		const buttonFunctions = {
			view: this.handleClickListItem,
			edit: this.editTodo,
			deleteTodo: this.deleteTodo,
			completed: this.markCompleted
		};
		const modalWindowProps = {
			todo,
			mode,
			close: this.handleCloseModal
		};
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Layout
					handleChange={this.handleChange}
					clear={this.clearList}
					rightSide={
						<Filter list={list} onChange={this.getFilteredList} />
					}
					leftSide={
						<List
							list={paginatedList}
							noListMessage={noListMessage}
							btnFunc={buttonFunctions}
						/>
					}
					bottom={
						<Pagination
							list={forPagination}
							onChange={this.getPaginatedList}
						/>
					}
				/>
				{/*			***modal window***		*/}
				{mode !== 'list' &&
					(mode === 'edit' || mode === 'form' ? (
						<ReactForm
							{...modalWindowProps}
							handleSubmit={this.handleSubmit}
						/>
					) : (
						mode === 'view' && (
							<View
								{...modalWindowProps}
								functions={buttonFunctions}
							/>
						)
					))}
			</DragDropContext>
		);
	}

	getTodos = n => {
		let arr = [];
		for (let i = 0; i < n; i++) {
			const text = 'test todo ' + i;
			const desc = 'test description ' + i;
			const todo = new Todo(text, desc);
			todo.id = i;
			arr.push(todo);
		}
		return arr;
	};

	// arr можно убрать, он нужен только для тестового списка
	getUniqueId = () => {
		const arr = this.state.list.map(({ id }) => id);
		for (let i = 0; i < arr.length; i++) {
			if (!arr.includes(i)) {
				return i;
			}
		}
		return arr.length;
	};

	deleteTodo = id => {
		let list = this.state.list;
		const index = list.findIndex(todo => todo.id === id);
		if (window.confirm(`Удалить ${list[index].task}?`)) {
			list = update(list, { $splice: [[index, 1]] });
			this.setState({
				list,
				mode: 'list'
			});
		}
	};

	editTodo = id => {
		const todo = { ...this.getTodoById(id) };
		this.setState(state => ({
			mode: 'edit',
			todo
		}));
	};

	markCompleted = id => {
		const todo = { ...this.getTodoById(id) };
		if (todo.status === 'completed') {
			return;
		}
		todo.status = 'completed';
		todo.date = todo.time = moment().toDate();
		const list = [...this.state.list];
		const todoIndex = this.getTodoIndexById(id);
		list[todoIndex] = todo;
		this.setState({
			list
		});
	};

	reorder = (startIndex, endIndex) => {
		// массив id-значений отфильтрованного списка сопоставляется с оригинальным списком,
		// чтобы получить реальный текущий индекс элементов (react-beautiful-dnd)
		startIndex = this.getTodoIndexById(
			this.state.paginatedList[startIndex].id
		);
		endIndex = this.getTodoIndexById(this.state.paginatedList[endIndex].id);
		const arr = [...this.state.list];
		const [removed] = arr.splice(startIndex, 1);
		arr.splice(endIndex, 0, removed);
		return arr;
	};

	onDragEnd = result => {
		const { source, destination } = result;
		if (!destination) {
			return;
		}
		if (source.index === destination.index) {
			return;
		}
		const list = this.reorder(source.index, destination.index);
		this.setState({
			list
		});
	};

	todoAlreadyExists = val => {
		this.state.list.some(value => value['task'] === val);
	};

	getTodoIndexById = id => {
		const list = [...this.state.list];
		const todoIndex = list.findIndex(todo => todo.id === id);
		return todoIndex;
	};

	getTodoById = id => {
		const list = [...this.state.list];
		const todoIndex = list.findIndex(todo => todo.id === id);
		return list[todoIndex];
	};
}

export default App;
