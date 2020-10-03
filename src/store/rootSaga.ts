import { all } from 'redux-saga/effects';

import workerSaga from './worker/sagas';
import authSaga from './auth/sagas';

export default function* rootSaga(){
  return yield all([
    workerSaga,
    authSaga,
  ]);
}