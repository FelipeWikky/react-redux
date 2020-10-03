import { createStore, Store } from "redux";
import { WorkerState } from "./worker/types";

import rootReducer from './rootReducer'

export interface ApplicationState {
  workerStore:WorkerState
}

const store:Store<ApplicationState> = createStore(rootReducer);

export default store;