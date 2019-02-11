// @ts-check
import React from 'react';
import ReactForm from './form';
import DumbList from '../elements/dumbList';
import Record from '../elements/record';
import Filter from '../elements/filter';
import Pages from '../elements/pages';
import Item from '../Item';
import ButtonPanel from '../elements/buttonPanel';
import { Button, Form, Grid, GridColumn } from 'semantic-ui-react';
import { DragDropContext } from 'react-beautiful-dnd';
import { arrayOf } from 'prop-types';
// import Tumbler from '../elements/tumbler';
// import UserMessage from '../elements/userMessage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			item: {},
			id: null,
			mode: 'list'
		};
		this.getDataFromLocalStorage = this.getDataFromLocalStorage.bind(this);
		this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
		this.recordAlreadyExists = this.recordAlreadyExists.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
		this.editRecord = this.editRecord.bind(this);
		this.markCompleted = this.markCompleted.bind(this);
		this.addLevel = this.addLevel.bind(this);
		this.handleClickListItem = this.handleClickListItem.bind(this);
		this.isExpired = this.isExpired.bind(this);
		this.onDragEnd = this.onDragEnd.bind(this);
		this.getUniqueId = this.getUniqueId.bind(this);
	}

	// есть лишнее
	componentDidMount() {
		if (localStorage.length) {
			this.getDataFromLocalStorage();
		} else {
			let data = this.getItems(12);
			this.setState({
				list: data
			});
		}
		document.addEventListener('keydown', this.cancelEdit);
		window.addEventListener('beforeunload', this.saveDataToLocalStorage);
	}

	componentWillUnmount() {
		this.saveDataToLocalStorage();
		document.removeEventListener('keydown', this.cancelEdit);
		window.removeEventListener('beforeunload', this.saveDataToLocalStorage);
	}

	getDataFromLocalStorage = () => {
		let arr = [];
		for (let i = 0; i < localStorage.length; i++) {
			arr.push(JSON.parse(localStorage.getItem(i.toString())));
			if (arr[i].status !== 'completed') {
				arr[i].status = this.isExpired(arr[i]);
			}
		}
		this.setState({
			list: arr
		});
	};

	saveDataToLocalStorage = () => {
		localStorage.clear();
		this.state.list.map((item, i) =>
			localStorage.setItem(i.toString(), JSON.stringify(item))
		);
	};

	/* handleChange может обрабатывать как React onChange (с event), так и Semantic onChange (без event) */
	handleChange(event) {
		event.target && (event = event.target);
		let { name, value, checked, activePage } = event;
		checked && (value = checked);
		activePage && (value = activePage);
		/* если меняется количество записей на странице, то текущий номер страницы сбрасывается */
		name === 'recordsPerPage' &&
			this.setState({
				pageNumber: 1
			});
		this.setState({
			[name]: value
		});
	}

	/* подтверждение ReactForm в режимах добавления и редактирования */
	handleSubmitForm(obj, index) {
		let arr = [...this.state.list];
		if (this.state.mode === 'form') {
			obj.id = this.getUniqueId();
			arr.push(obj);
		} else {
			arr[index] = obj;
		}
		this.setState({
			list: arr,
			mode: 'list'
		});
	}

	handleClickListItem(item) {
		this.setState({
			item,
			mode: 'details'
		});
	}

	render() {
		let element;
		const list = this.state.list;
		const currentItemIndex = this.state.list.indexOf(this.state.item);
		switch (this.state.mode) {
			case 'list':
				element = (
					<React.Fragment>
						{this.state.list.length ? (
							<Filter list={this.state.list}>
								<Pages>
									<DumbList
										originalList={this.state.list}
										handleClick={this.handleClickListItem}
										onDragEnd={this.onDragEnd}
										delete={this.deleteRecord}
									/>
								</Pages>
							</Filter>
						) : (
							<h3>Your list is empty</h3>
						)}
					</React.Fragment>
				);
				break;
			case 'edit':
				const item = this.state.item;
				const index = list.findIndex(el => el.id === item.id);
			case 'form':
				element = (
					<ReactForm
						item={item || null}
						index={index || null}
						mode={this.state.mode}
						handleSubmit={this.handleSubmitForm}
						getId={this.getUniqueId}
					/>
				);
				break;
			case 'details':
				element = (
					<Record
						item={this.state.item}
						completed={() => this.markCompleted(currentItemIndex)}
						delete={() => this.deleteRecord(currentItemIndex)}
					>
						<ButtonPanel
							delete={() => this.deleteRecord(currentItemIndex)}
							edit={() => this.editRecord(currentItemIndex)}
						/>
					</Record>
				);
				break;
			default:
				return <h1>No Mode set!</h1>;
		}

		const totalListLength = this.state.list.length;

		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<h3>
					You have {totalListLength}{' '}
					{totalListLength === 1 ? 'record' : 'records'}
				</h3>
				{this.state.mode === 'list' ? (
					<Form>
						<Form.Button
							onClick={this.handleChange}
							name="mode"
							value="form"
							icon="add square"
							title="Add Task"
						/>
						<Form.Button
							onClick={() => this.setState({ list: [] })}
							icon="cancel"
							title="Clear List"
						/>
					</Form>
				) : (
					<Button
						onClick={this.handleChange}
						name="mode"
						value="list"
						icon="chevron circle left"
					/>
				)}
				{element}
			</DragDropContext>
		);
	}

	getItems = n => {
		let arr = [];
		for (let i = 0; i < n; i++) {
			const task = 'test record ' + i;
			const desc = 'test description ' + i;
			const item = new Item(task, desc);
			item.id = i;
			arr.push(item);
		}
		return arr;
	};
	// arr можно убрать, он нужен только для тестового списка
	getUniqueId() {
		const arr = this.state.list.map(val => val.id);
		for (let i = 0; i < arr.length; i++) {
			if (!arr.includes(i)) {
				return i;
			}
		}
		return arr.length;
	}

	addLevel(record) {
		let arr = [...this.state.list];
		arr[record].hasChildren = true;
		arr[record].children = [];
	}

	isExpired(item) {
		if (item.date) {
			const date = item.date;
			const time = item.time ? item.time : '00:00';
			const dateObj = new Date(`${date} ${time}`);
			const today = new Date(Date.now());
			if (dateObj.getTime() < today.getTime()) {
				return 'expired';
			}
		}
		return '';
	}

	cancelEdit(e) {
		if (e.keyCode === 27 && this.state.mode !== 'list') {
			this.setState({
				mode: 'list'
			});
		}
	}

	recordAlreadyExists(val) {
		return this.state.list.some(value => value['task'] === val);
	}

	deleteRecord(id) {
		const list = [...this.state.list];
		const itemIndex = list.findIndex(item => item.id === id);
		if (window.confirm(`Удалить ${list[itemIndex].task}?`)) {
			list.splice(itemIndex, 1);
			this.setState({
				list,
				id: null,
				item: {},
				mode: 'list'
			});
		}
	}

	editRecord(record) {
		this.setState(state => ({
			mode: 'edit',
			item: state.list[record]
		}));
	}

	markCompleted(record) {
		if (this.state.list[record].status === 'completed') {
			return;
		}
		const arr = [...this.state.list];
		const item = arr[record];
		//	set status
		item.status = 'completed';
		//	get completion time
		const now = new Date(Date.now());
		item.date = now.toISOString().slice(0, 10);
		let H = now.getHours().toString();
		H = H.length < 2 ? '0' + H : H;
		let M = now.getMinutes().toString();
		M = M.length < 2 ? '0' + M : M;
		item.time = `${H}:${M}`;
		//	update state
		this.setState({
			list: arr
		});
	}

	onDragEnd = result => {
		const { source, destination } = result;
		if (!destination) {
			return;
		}
		if (source.index === destination.index) {
			return;
		}
		const list = reorder(this.state.list, source.index, destination.index);
		this.setState({
			list
		});
	};
}

const reorder = (list, startIndex, endIndex) => {
	const arr = [...list];
	const [removed] = arr.splice(startIndex, 1);
	arr.splice(endIndex, 0, removed);
	return arr;
};

export default App;
