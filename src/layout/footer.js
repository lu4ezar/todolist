import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { list } from '../utils/color';

const StyledNavbar = styled(Navbar)`
	border-top: 4px solid ${list.border};
	margin-top: 1em;
	background-color: ${list.background};
	height: ${props => props.height && `${props.height}em`};
	margin-left: -15px;
	margin-right: -15px;
`;

const StyledLink = styled.a`
	color: '#fff',
	background: 'transparent',
	border: 'none'
`;

const Footer = ({ height }) => (
	<StyledNavbar height={height}>
		<Container>
			<Navbar.Text>
				<StyledLink
					href='https://github.com/lu4ezar/todolist'
					title='Open Github page'
				>
					<FontAwesomeIcon
						icon={['fab', 'github-square']}
						size='2x'
					/>
				</StyledLink>
			</Navbar.Text>
		</Container>
	</StyledNavbar>
);

export default Footer;
