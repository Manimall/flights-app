import { handleActions } from 'redux-actions'

import { searchFlight } from './actions'

const initialState = {
	searchTerm: '',
};

export default handleActions({
	[searchFlight]: (state, { payload }) => ({
		searchTerm: payload,
	}),
}, initialState);
