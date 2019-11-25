import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { fetchFlightsStart, fetchFlightsSuccess, fetchFlightsFailure } from './actions';
import { fetchFlights as fetchFlightsApi } from './api';


function* fetchFlightsFlow({ payload }) {
	const { direction } = payload;

	try {
		const response = yield call(fetchFlightsApi, direction);
		yield put(fetchFlightsSuccess({
			direction,
			flights: response.items,
			page: response.pagination.curPage,
			totalItems: response.pagination.totalItems,
		}));
	} catch(error) {
		console.log(error);
		yield put(fetchFlightsFailure(error.statusText));
	}
}

function* fetchFlights() {
	yield takeEvery(fetchFlightsStart, fetchFlightsFlow);
}

export default function*() {
	yield fork(fetchFlights);
}
