// @flow
import type { FilterAction, FilterPayload } from '../../types/filter';
import { SET_FILTER } from './actionTypes';

export const setFilter = (payload: FilterPayload): FilterAction => ({
	type: SET_FILTER,
	payload
});
