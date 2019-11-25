import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';

import { flights } from 'modules/flights';
import { search } from "modules/search";

import { flightsSaga } from 'modules/flights';


export default combineReducers({
	flights,
	search,
})

export function* rootSaga() {
	yield fork(flightsSaga);
}
