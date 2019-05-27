// @flow
import * as React from 'react';
import CoreDrawer from '@material-ui/core/Drawer';

type Props = {
	side: string,
	open: boolean,
	cancel: () => void,
	children: React.Node
};

const Drawer = ({ side, open, cancel, children }: Props) => {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	React.useEffect(() => setState(state => ({ ...state, [side]: open })), [
		side,
		open
	]);

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [side]: open });
		cancel();
	};

	return (
		<CoreDrawer
			anchor={side}
			open={open}
			onClose={toggleDrawer('right', false)}
		>
			{children}
		</CoreDrawer>
	);
};

export default Drawer;
