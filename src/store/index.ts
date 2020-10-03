import { applyMiddleware, createStore, Middleware, Store } from "redux"
import createSagaMiddleware from 'redux-saga'

import { WorkerState } from "./worker/types"
import {AuthState} from './auth/types'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export interface ApplicationState {
  workerStore:WorkerState,
  authStore:AuthState,
}

const sagaMiddleware = createSagaMiddleware();

const middlewares:Middleware[] = [sagaMiddleware]

const store:Store<ApplicationState> = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;