// @flow
import { SET_MODE } from '../actions/actionTypes';
import type { Mode, ModeActions, ModeState } from '../../types/mode';

const setMode = (mode: Mode): Mode => ({
	mode
});

const mode = (state: Mode = 'list', action: ModeActions): ModeState => {
	switch (action.type) {
		case SET_MODE:
			return setMode(action.mode);
		default:
			return state;
	}
};

export default mode;
