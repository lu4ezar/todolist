// @flow
import { SET_FILTER } from '../actions/actionTypes';
import type { FilterAction, Filter } from '../../types/filter';

const initialState: Filter = {
	filterOn: false,
	priorityFilterEnabled: false,
	priorityFilter: ['normal'],
	completedFilterEnabled: false,
	completedFilter: true,
	expiredFilterEnabled: false,
	expiredFilter: true
};

const filter = (state: Filter = initialState, action: FilterAction): Filter => {
	const { payload } = action;
	switch (action.type) {
		case SET_FILTER:
			return { ...state, ...payload };
		default:
			return state;
	}
};

export default filter;
