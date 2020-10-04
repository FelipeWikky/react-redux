import {ActionType} from 'typesafe-actions'
import {call, put, all, takeLatest} from 'redux-saga/effects'
// import {push} from 'connected-react-router'

import {AuthTypes } from './types';
import * as AuthActions from './actions'

import axios, { AxiosResponse } from 'axios'
const api = axios.create({baseURL:'http://localhost:3005'});

export function* requestLogin( action: ActionType<typeof AuthActions.requestSignIn> ) {
  try {
    const response:AxiosResponse = yield call(api.post, '/user/login', 
      {login:action.payload.auth.email, password:action.payload.auth.password});
    yield put( AuthActions.signInSuccessful(action.payload.auth, response.data.token) );
    // yield put( push('/sagas') );
    if (action.payload.redirect)
      action.payload.redirect()
  }catch (err) {
    console.log('*err saga/auth-> ', err);
    yield put( AuthActions.signInFailure() );
  }
}

export function* requestRegister(action:ActionType<typeof AuthActions.requestSignUp>) {
  try {
    const response:AxiosResponse = yield call(api.post, '/user/customer/add',
    {login:action.payload.auth.email, password:action.payload.auth.password});
    yield put ( AuthActions.signUpSuccessful(action.payload.auth, response.data.token) );
    if (action.payload.redirect)
      action.payload.redirect()
  } catch(err) {
    yield put ( AuthActions.signUpFailure() );
  }
}

export default all([
  takeLatest(AuthTypes.REQUEST_SIGNIN, requestLogin),
  takeLatest(AuthTypes.REQUEST_SIGNUP, requestRegister)
]);
