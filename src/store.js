import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer, { rootSaga } from 'modules';

const createAppStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];

	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	sagaMiddleware.run(rootSaga);
	return store;
};

export default createAppStore;
