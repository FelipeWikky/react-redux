import { applyMiddleware, createStore, Middleware, Store } from "redux"
import createSagaMiddleware from 'redux-saga'

import {routerMiddleware } from 'connected-react-router'

import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {persistConfig} from '../utils/Constants'

import history from '../routes/history'

import { WorkerState } from "./worker/types"
import {AuthState} from './auth/types'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export interface ApplicationState {
  workerStore:WorkerState,
  authStore:AuthState,
}

const persistConf:PersistConfig<ApplicationState> = {
  key: 'worker',
  storage,
  whitelist:['workerStore'],
}



const sagaMiddleware = createSagaMiddleware();

const middlewares:Middleware[] = [
  sagaMiddleware,
  routerMiddleware(history),
]

const persistedReducer = 
  persistReducer(persistConfig('worker', storage, ['workerStore'] || persistConf), rootReducer);

const store:Store<ApplicationState> = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;