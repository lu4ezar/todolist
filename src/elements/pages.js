import React from 'react';
import PropTypes from 'prop-types';
//import { Pagination, Dropdown, GridColumn, Container } from "semantic-ui-react";
// import { Pager } from 'react-bootstrap';
import styled from 'styled-components';
// import StyledSelect from "./select";
import Select from 'react-select';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
	faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import CustomSelect from './select';

library.add(faArrowAltCircleLeft, faArrowAltCircleRight, faPencilAlt);

// const options = [3, 4, 5, 10, 20, "all"];
const options = [
	{ name: 'recordsPerPage', value: 3, nlabel: '3' },
	{ name: 'recordsPerPage', value: 4, label: '4' },
	{ name: 'recordsPerPage', value: 5, label: '5' },
	{ name: 'recordsPerPage', value: 10, label: '10' },
	{ name: 'recordsPerPage', value: 20, label: '20' },
	{ name: 'recordsPerPage', value: 100, label: 'All' }
];

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Pager = styled.div`
	// display: flex;
	// justify-content: center;
	// background: skyblue;
	// border: blue 2px solid;
	// border-radius: 29px;
	padding: 3px;
`;

const Icon = styled(FontAwesomeIcon)`
	// cursor: pointer;
	&:hover {
		color: blue;
		background: blue;
		//filter: brightness(20%);
	}
`;

const StyledButton = styled.button`
	border-radius: 8px;
`;

const StyledSelect = styled(Select)`
	margin-left: auto;
	width: 450px;
`;

/*const options = [
	{ value: 3, label: "3" },
	{ value: 4,	label: "4" },
	{ value: 5,	label: "5" },
	{ value: 10, label: "10" },
	{ value: 20, label: "20" },
	{ value: 100, label: "All" }
];*/

class Pages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recordsPerPage: 5,
			pageNumber: 1
		};
		this.handleChange = this.handleChange.bind(this);
		this.getDropdownOptions = this.getDropdownOptions.bind(this);
		this.renderPagination = this.renderPagination.bind(this);
		this.renderRecsPerPage = this.renderRecsPerPage.bind(this);
	}

	componentDidMount() {
		// считываем сохраненное состояние из localStorage (если есть):
		const obj = JSON.parse(localStorage.getItem('pagesState'));
		if (obj !== null) {
			let { recordsPerPage, pageNumber } = obj;
			const length = this.props.list.length;
			this.setState({
				recordsPerPage,
				pageNumber
			});
		}
	}

	/*
  *1 - если во время удаления записи recordsPerPage был в положении max (= arr.length), 
  то recordsPerPage уменьшается на 1 чтобы не выходить за допустимые пределы
  *2 - если удаляемая запись была на текущей странице последней,
  то (pageNumber - 1) чтобы не отображалась пустая 
  */

	componentWillUnmount() {
		// записываем состояние в localStorage
		localStorage.setItem('pagesState', JSON.stringify(this.state));
	}

	componentDidUpdate(prevProps) {
		if (this.props.list.length !== prevProps.list.length) {
			this.setState({
				pageNumber: 1,
				recordsPerPage: this.props.list.length
			});
		}
	}

	handleChange = data => {
		const { value, name } = data.target ? data.target : data;
		this.setState({
			recordsPerPage: value
		});
	};

	//TODO: интегрировать в handleChange после того как избавлюсь от semantic
	handlePageChange = e => {
		const { name } = e.target;
		console.log(`name = ${name}`);
		let { pageNumber } = this.state;
		name === 'ascPage' ? pageNumber++ : pageNumber--;
		this.setState({
			pageNumber
		});
	};

	renderPagination = () => {
		const totalPages = Math.ceil(
			this.props.list.length / this.state.recordsPerPage
		);
		if (totalPages > 1) {
			return (
				<Pager>
					<StyledButton
						name="descPage"
						onClick={this.handlePageChange}
						disabled={this.state.pageNumber === 1}
					>
						<Icon icon="arrow-alt-circle-left" size="2x" />
					</StyledButton>
					<StyledButton
						name="ascPage"
						onClick={this.handlePageChange}
						disabled={this.state.pageNumber === totalPages}
					>
						<Icon icon="arrow-alt-circle-right" size="2x" />
					</StyledButton>
				</Pager>
			);
		}
	};

	getDropdownOptions = options => {
		let arr = [];
		const list = this.props.list;
		for (let i = 0; i < options.length; i++) {
			let value;
			i === options.length - 1 ? (value = list.length) : (value = options[i]);
			if (value < list.length || options[i] === 'all') {
				arr.push({
					key: i,
					text: options[i].toString(),
					value: value
				});
			}
		}
		return arr;
	};

	renderRecsPerPage = () => {
		const { recordsPerPage } = this.state;
		const selectWidth = {
			width: 450
		};
		return (
			<Select
				style={{ width: 250, height: 100 }}
				options={options}
				name="recordsPerPage"
				value={recordsPerPage}
				onChange={this.handleChange}
			/>
		);
	};

	render() {
		let list = [...this.props.list];
		const { recordsPerPage, pageNumber } = this.state;
		list = list.slice(
			(pageNumber - 1) * recordsPerPage,
			pageNumber * recordsPerPage
		);
		const children = React.cloneElement(this.props.children, {
			list: list
		});
		if (!list.length) {
			return <h3>Nothing to show</h3>;
		} else {
			return (
				<React.Fragment>
					{children}
					<Container>
						{this.renderPagination()}
						RPP: {this.state.recordsPerPage} PN: {this.state.pageNumber}
						{this.renderRecsPerPage()}
					</Container>
					<Select
						style={{ width: 250, height: 100 }}
						options={options}
						name="recordsPerPage"
						value={recordsPerPage}
						onChange={this.handleChange}
					/>
				</React.Fragment>
			);
		}
	}
}

Pages.propTypes = {
	// pageNumber: PropTypes.number.isRequired,
	// recordsPerPage: PropTypes.number.isRequired,
	// listLength: PropTypes.number.isRequired,
	list: PropTypes.array.isRequired
};

Pages.defaultProps = {
	list: []
};

export default Pages;
