import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ListColor } from '../utils/color';
import Button from '../elements/styledButton';

const StyledNavbar = styled(Navbar)`
	border-bottom: 4px solid ${ListColor.border};
	background: ${ListColor.background};
`;

const Header = props => (
	<StyledNavbar>
		<Container>
			<Navbar.Brand href="#">ToDoList App</Navbar.Brand>
			<ButtonGroup className="ml-auto">
				<Button
					onClick={props.handleChange}
					name="mode"
					value="form"
					title="Add New Todo"
				>
					<FontAwesomeIcon
						className="mx-2"
						icon="plus-square"
						size="2x"
						style={{ pointerEvents: 'none' }}
					/>
				</Button>
				<Button onClick={props.clear} title="Clear List">
					<FontAwesomeIcon
						className="mx-2"
						icon="ban"
						size="2x"
						style={{ pointerEvents: 'none' }}
					/>
				</Button>
			</ButtonGroup>
		</Container>
	</StyledNavbar>
);

export default Header;
