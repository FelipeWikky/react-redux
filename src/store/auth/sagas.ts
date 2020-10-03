import {ActionType} from 'typesafe-actions'
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {AuthTypes } from './types';
import * as AuthActions from './actions'

import axios, { AxiosResponse } from 'axios'

export function* requestLogin( action: ActionType<typeof AuthActions.requestSignIn> ) {
  const api = axios.create({baseURL:'http://localhost:3005'});
  try {
    const response:AxiosResponse = yield call(api.post, '/user/login', 
      {login:action.payload.auth.email, password:action.payload.auth.password});
    yield put( AuthActions.signInSuccessful(action.payload.auth, response.data.token) );
  }catch (err) {
    console.log('*err saga/auth-> ', err);
    yield put( AuthActions.signInFailure() );
  }
}

export default all([
  takeLatest(AuthTypes.REQUEST_SIGNIN, requestLogin)
]);
