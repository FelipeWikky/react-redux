import { combineReducers } from "redux";

// import history from '../routes/history'
// import { connectRouter } from "connected-react-router";

import worker from './worker/reducer'
import auth from './auth/reducer'

export default combineReducers({
  workerStore: worker,
  authStore: auth,
  //router: connectRouter(history),
});