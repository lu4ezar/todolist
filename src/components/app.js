// @ts-check
import React from "react";
import ReactForm from "./form";
import DumbList from "../elements/dumbList";
import Record from "../elements/record";
import Filter from "../elements/filter";
import Pages from "../elements/pages";
import Item from "../Item";
import ButtonPanel from "../elements/buttonPanel";
import { Button, Form, Grid, GridColumn } from "semantic-ui-react";
// import Tumbler from '../elements/tumbler';
// import UserMessage from '../elements/userMessage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			item: {},
			mode: "list"
		};

		this.getDataFromLocalStorage = this.getDataFromLocalStorage.bind(this);
		this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
		this.recordAlreadyExists = this.recordAlreadyExists.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
		this.editRecord = this.editRecord.bind(this);
		this.moveRecordUp = this.moveRecordUp.bind(this);
		this.moveRecordDown = this.moveRecordDown.bind(this);
		this.markCompleted = this.markCompleted.bind(this);
		this.addLevel = this.addLevel.bind(this);
		this.handleClickListItem = this.handleClickListItem.bind(this);
		this.isExpired = this.isExpired.bind(this);
	}

	componentDidMount() {
		if (!localStorage.length) {
			let data = this.getItems(12);
			this.setState({
				list: data
			});
		} else {
			this.getDataFromLocalStorage();
		}
		document.addEventListener("keydown", this.cancelEdit);
		window.addEventListener("beforeunload", this.saveDataToLocalStorage);
	}

	componentWillUnmount() {
		this.saveDataToLocalStorage();
		document.removeEventListener("keydown", this.cancelEdit);
		window.removeEventListener("beforeunload", this.saveDataToLocalStorage);
	}

	getDataFromLocalStorage() {
		let arr = [];
		for (let i = 0; i < localStorage.length; i++) {
			arr.push(JSON.parse(localStorage.getItem(i.toString())));
			if (arr[i].status !== "completed") {
				arr[i].status = this.isExpired(arr[i]);
			}
		}
		this.setState({
			list: arr
		});
	}

	saveDataToLocalStorage() {
		localStorage.clear();
		this.state.list.map((item, i) =>
			localStorage.setItem(i.toString(), JSON.stringify(item))
		);
	}

	/* handleChange может обрабатывать как React onChange (с event), так и Semantic onChange (без event) */
	handleChange(event) {
		event.target && (event = event.target);
		let { name, value, checked, activePage } = event;
		checked && (value = checked);
		activePage && (value = activePage);
		/* если меняется количество записей на странице, то текущий номер страницы сбрасывается */
		name === "recordsPerPage" &&
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
		if (this.state.mode === "form") {
			arr.push(obj);
		} else {
			arr[index] = obj;
		}
		this.setState({
			list: arr,
			mode: "list"
		});
	}

	handleClickListItem(i) {
		this.setState({
			item: i,
			mode: "details"
		});
	}

	render() {
		let element;
		const currentItemIndex = this.state.list.indexOf(this.state.item);
		switch (this.state.mode) {
			case "list":
				element = (
					<React.Fragment>
						{/* <Grid columns={3}> */}
						{this.state.list.length ? (
							<Filter list={this.state.list}>
								<Pages>
									<DumbList
										handleClick={this.handleClickListItem}
									/>
								</Pages>
							</Filter>
						) : (
							<h3>Your list is empty</h3>
						)}
						{/* </Grid> */}
					</React.Fragment>
				);
				break;
			case "edit":
				const item = this.state.item;
				const index = currentItemIndex;
			case "form":
				element = (
					<ReactForm
						item={item || null}
						index={index || null}
						mode={this.state.mode}
						handleSubmit={this.handleSubmitForm}
					/>
				);
				break;
			case "details":
				element = (
					<Record
						item={this.state.item}
						completed={() => this.markCompleted(currentItemIndex)}
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
			<React.Fragment>
				<h3>
					You have {totalListLength}{" "}
					{totalListLength === 1 ? "record" : "records"}
				</h3>
				{this.state.mode === "list" ? (
					<Form>
						<Form.Button
							onClick={this.handleChange}
							name="mode"
							value="form"
							icon="add square"
						/>
						<Form.Button
							onClick={() => this.setState({ list: [] })}
							icon="cancel"
							circular
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
			</React.Fragment>
		);
	}

	getItems(n) {
		let arr = [];
		for (let i = 0; i < n; i++) {
			const task = "test record " + i;
			const desc = "test description " + i;
			const item = new Item(task, desc);
			arr.push(item);
		}
		return arr;
	}

	addLevel(record) {
		let arr = [...this.state.list];
		arr[record].hasChildren = true;
		arr[record].children = [];
	}

	isExpired(item) {
		if (item.date) {
			const date = item.date;
			const time = item.time ? item.time : "00:00";
			const dateObj = new Date(`${date} ${time}`);
			const today = new Date(Date.now());
			if (dateObj.getTime() < today.getTime()) {
				return "expired";
			}
		}
		return "";
	}

	cancelEdit(e) {
		if (e.keyCode === 27 && this.state.mode !== "list") {
			this.setState({
				mode: "list"
			});
		}
	}

	recordAlreadyExists(val) {
		return this.state.list.some(value => value["task"] === val);
	}

	deleteRecord(record) {
		if (window.confirm(`Удалить ${this.state.list[record].task}?`)) {
			let arr = [...this.state.list];
			arr.splice(record, 1);
			this.setState({
				list: arr,
				item: {},
				mode: "list"
			});
		}
	}

	editRecord(record) {
		this.setState(state => ({
			mode: "edit",
			item: state.list[record]
		}));
	}

	moveRecordUp(record) {
		if (this.state.list[record - 1]) {
			let arr = [...this.state.list];
			[arr[record - 1], arr[record]] = [arr[record], arr[record - 1]];
			this.setState({
				list: arr
			});
		}
	}

	moveRecordDown(record) {
		if (this.state.list[record + 1]) {
			let arr = [...this.state.list];
			[arr[record], arr[record + 1]] = [arr[record + 1], arr[record]];
			this.setState({
				list: arr
			});
		}
	}

	markCompleted(record) {
		const arr = [...this.state.list];
		let item = arr[record];
		item.status = "completed";
		const now = new Date(Date.now());
		item.date = now.toISOString().slice(0, 10);
		item.time = now.toLocaleTimeString().slice(0, 5);
		this.setState({
			list: arr
		});
	}
}

export default App;
