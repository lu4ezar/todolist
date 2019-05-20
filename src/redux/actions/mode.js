// @flow
import type { Mode, ModeActions } from '../../types/mode';
import { SET_MODE } from './actionTypes';

export const setMode = (mode: Mode): ModeActions => ({
	type: SET_MODE,
	mode
});
