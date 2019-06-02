// @flow
import * as React from 'react';
import CoreDrawer from '@material-ui/core/Drawer';
import { IconButton, Divider } from '@material-ui/core';
import { ListColor } from '../utils/color';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

type Props = {
	side: string,
	open: boolean,
	toggleDrawer: () => void,
	variant?: string,
	children: React.Node
};

const Drawer = ({
	side,
	open,
	toggleDrawer,
	children,
	variant
}: Props): React.Node => {
	const Chevron = side === 'left' ? <ChevronRight /> : <ChevronLeft />;
	return (
		<CoreDrawer
			anchor={side}
			open={open}
			onClose={toggleDrawer}
			variant={variant}
			children={children}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: `${
						side === 'left' ? 'flex-end' : 'flex-start'
					}`,
					background: `${ListColor.background}`
				}}
			>
				<IconButton onClick={toggleDrawer}>{Chevron}</IconButton>
			</div>
			<Divider />
			{children}
		</CoreDrawer>
	);
};

export default Drawer;
