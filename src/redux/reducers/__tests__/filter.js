import reducer from '../filter';
import * as ActionTypes from '../../actions/actionTypes';

const initialState = {
	filterOn: false,
	priorityFilterEnabled: false,
	priorityFilter: ['normal'],
	completedFilterEnabled: false,
	completedFilter: true,
	expiredFilterEnabled: false,
	expiredFilter: true
};

const type = ActionTypes.SET_FILTER;

const payload = { filterOn: true };

const action = {
	type,
	payload
};

const state = initialState;

describe('filter reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should update filter on SET_FILTER action', () => {
		const expectedState = {
			filterOn: true,
			priorityFilterEnabled: false,
			priorityFilter: ['normal'],
			completedFilterEnabled: false,
			completedFilter: true,
			expiredFilterEnabled: false,
			expiredFilter: true
		};
		expect(reducer(state, action)).toEqual(expectedState);
	});
});
