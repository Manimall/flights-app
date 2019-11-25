import { createAction } from 'redux-actions'

export const fetchFlightsStart = createAction('FETCH_FLIGHTS_START');
export const fetchFlightsSuccess = createAction('FETCH_FLIGHTS_SUCCESS');
export const fetchFlightsFailure = createAction('FETCH_FLIGHTS_FAILURE');
