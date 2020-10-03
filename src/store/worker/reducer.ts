import { AnyAction, Reducer } from "redux";
import {WorkerState, WorkerTypes} from "./types";

const INITIAL_STATE:WorkerState = {
  workers:[],
  requested: false,
}

const reducer: Reducer<WorkerState>= (state = INITIAL_STATE, action:AnyAction) => {
  switch (action.type) {
    case WorkerTypes.ADD_WORKER:
      return {...state, workers:[...state.workers, action.payload.worker] }
    case WorkerTypes.REMOVE_WORKER:
      return {...state, workers:state.workers.filter(worker => worker.id !== action.payload.worker.id)}
    case WorkerTypes.LOAD_WORKERS:
      return {...state, requested: true}
    default:
      return state;
  }
}

export default reducer;