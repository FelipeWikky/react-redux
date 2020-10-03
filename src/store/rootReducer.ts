import { combineReducers } from "redux";

import worker from './worker/reducer'

export default combineReducers({
  workerStore:worker,
});