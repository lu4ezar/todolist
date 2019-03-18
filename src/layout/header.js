import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { list } from '../utils/color';
import Button from '../elements/styledButton';

const StyledNavbar = styled(Navbar)`
	border-bottom: 4px solid ${list.border};
	background: ${list.background};
`;

const Header = props => (
	<StyledNavbar>
		<Container>
			<Navbar.Brand href='#'>ToDoList App</Navbar.Brand>
			<ButtonGroup className='ml-auto'>
				<Button
					onClick={props.handleChange}
					name='mode'
					value='form'
					title='Add New Item'
				>
					<FontAwesomeIcon
						className='mx-2'
						title='Add Task'
						icon='plus-square'
						size='2x'
					/>
				</Button>
				<Button onClick={props.clear} title='Clear List'>
					<FontAwesomeIcon className='mx-2' icon='ban' size='2x' />
				</Button>
			</ButtonGroup>
		</Container>
	</StyledNavbar>
);

export default Header;
