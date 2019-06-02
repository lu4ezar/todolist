// @flow
import * as React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

type Props = {
	open: boolean,
	onClick: () => void,
	children: React.Node
};
const Navbar = ({ onClick, children }: Props) => (
	<AppBar position='static'>
		<Toolbar>
			<IconButton
				edge='start'
				color='inherit'
				aria-label='Menu'
				onClick={onClick}
			>
				<MenuIcon />
			</IconButton>
			{children}
		</Toolbar>
	</AppBar>
);

export default Navbar;
