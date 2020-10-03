import { AxiosResponse } from 'axios';
import {call, put, all, takeLatest} from 'redux-saga/effects'

import api from '../../services/api'
import {WorkerTypes, Worker} from './types'
import * as WorkerActions from './actions'

export function* requestWorkers(){
  try {
    const response:AxiosResponse = yield call(api.get, '/people/1');

    const worker:Worker  = {
      id: Number(String(Math.random() * 1000).split('.')[0]),
      name: response.data.name,
      age: Number(response.data.height)
    }
    yield put( WorkerActions.registerNewWorker(worker) );

  }catch(err) {
    console.log('**sagas.ts -> ', err);
  }
}

export default all([
  takeLatest(WorkerTypes.LOAD_WORKERS, requestWorkers)
])