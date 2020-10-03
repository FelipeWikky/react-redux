import workerSaga from './worker/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
  return yield all([
    workerSaga,
  ]);
}