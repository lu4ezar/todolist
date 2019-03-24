import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { list, listItem } from '../utils/color';
import Button from '../elements/styledButton';

const options = ['3', '4', '5', '10', '20', 'all'];

const StyledButtonGroup = styled(ButtonGroup)`
	background: ${list.background};
	border-radius: 8px;
`;

const Menu = styled(Dropdown.Menu)`
	border: 2px solid ${list.border};
	background: ${list.background};
`;

const DDItem = styled(Button)`
	background: ${list.dragBackground};
	border: 1px solid ${listItem.border};
	&:hover,
	&.active {
		background: ${listItem.background};
	}
`;

const PagesView = ({
	itemsPerPage,
	pageNumber,
	totalPages,
	handleChange,
	listLength
}) => {
	const dropdownItems = options.map((option, index) => {
		if (
			parseInt(option) < listLength ||
			option === itemsPerPage ||
			option === 'all'
		) {
			return (
				<Dropdown.Item
					as={DDItem}
					key={index}
					eventKey={index}
					name="itemsPerPage"
					value={option}
					active={option === itemsPerPage}
				>
					{option === 'all' ? option + ` (${listLength})` : option}
				</Dropdown.Item>
			);
		}
		return null;
	});

	return (
		<StyledButtonGroup>
			{totalPages > 1 && (
				<>
					<Button
						onClick={handleChange}
						name="pageNumber"
						value="descPage"
						disabled={pageNumber === 1}
					>
						<FontAwesomeIcon
							icon="arrow-alt-circle-left"
							size="2x"
							style={{ pointerEvents: 'none' }}
						/>
					</Button>
					<Button
						onClick={handleChange}
						name="pageNumber"
						value="ascPage"
						disabled={pageNumber === totalPages}
					>
						<FontAwesomeIcon
							icon="arrow-alt-circle-right"
							size="2x"
							style={{ pointerEvents: 'none' }}
						/>
					</Button>
				</>
			)}
			<Dropdown as={StyledButtonGroup}>
				<Dropdown.Toggle variant="outline-dark" id="items per page">
					<b>{`${pageNumber}of${totalPages}`}</b>
				</Dropdown.Toggle>
				<Menu onClick={handleChange}>{dropdownItems}</Menu>
			</Dropdown>
		</StyledButtonGroup>
	);
};

PagesView.propTypes = {
	itemsPerPage: PropTypes.string.isRequired,
	pageNumber: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	handleChange: PropTypes.func.isRequired,
	listLength: PropTypes.number.isRequired
};

export default PagesView;
