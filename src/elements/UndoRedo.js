// @flow
import * as React from 'react';
import { Fab, Icon } from '@material-ui/core/';

const UndoRedo = () => (
	<>
		<Fab>
			<Icon>undo</Icon>
		</Fab>
		<Fab>
			<Icon>redo</Icon>
		</Fab>
	</>
);

export default UndoRedo;
