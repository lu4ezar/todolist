import { setMode } from '../mode';
import * as types from '../actionTypes';

describe('mode actions', () => {
	it('setMode should create an action to set mode', () => {
		const mode = 'list';
		const expectedAction = {
			type: types.SET_MODE,
			mode
		};
		expect(setMode(mode)).toEqual(expectedAction);
	});
});
