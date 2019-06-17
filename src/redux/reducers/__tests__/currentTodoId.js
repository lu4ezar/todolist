import reducer from '../currentTodoId';
import * as ActionTypes from '../../actions/actionTypes';

const initialState = null;
let id = 5;
const type = ActionTypes.SET_ID;
const action = {
	type,
	id
};

describe('todo reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(null);
	});

	it('should handle SET_ID', () => {
		const expectedState = 5;
		expect(reducer({}, action)).toEqual(expectedState);
		id = 6;
		expect(reducer(expectedState, { type, id })).toEqual(6);
	});
});
