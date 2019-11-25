import { handleActions } from 'redux-actions'

import { fetchFlightsStart, fetchFlightsSuccess, fetchFlightsFailure } from './actions'

const initialState = {
	isLoading: true,
	errors: false,
	records: [],
	page: 0,
};

export default handleActions({
	[fetchFlightsStart]: (_state, _action) => initialState,

	[fetchFlightsSuccess]: (state, { payload }) => ({
		...state,
		isLoading: false,
		records: payload.flights,
		page: payload.page,
		direction: payload.direction,
		totalItems: payload.totalItems,
	}),

	[fetchFlightsFailure]: (state, { payload }) => ({
		...state,
		isLoading: false,
		errors: true,
		error: payload,
	}),

}, initialState);

