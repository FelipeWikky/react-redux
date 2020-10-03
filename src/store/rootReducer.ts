import { combineReducers } from "redux";

import worker from './worker/reducer'
import auth from './auth/reducer'

export default combineReducers({
  workerStore: worker,
  authStore: auth,
});