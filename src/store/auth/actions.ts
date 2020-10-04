import { action } from 'typesafe-actions'

import { Auth, AuthTypes } from './types'

export const requestSignIn = (auth:Auth, redirect?:Function) => action( AuthTypes.REQUEST_SIGNIN, {auth, redirect} );

export const signInSuccessful = (auth:Auth, token:string) => action(AuthTypes.SIGNIN_SUCCESS, {auth, token});

export const signInFailure = () => action(AuthTypes.SIGNIN_FAILURE);

export const requestSignUp = (auth:Auth, redirect?:Function) => action( AuthTypes.REQUEST_SIGNUP, {auth, redirect} );

export const signUpSuccessful = (auth:Auth, token:string) => action(AuthTypes.SIGNUP_SUCCESS, {auth, token});

export const signUpFailure = () => action(AuthTypes.SIGNUP_FAILURE);

export const requestsignOut = () => action(AuthTypes.REQUEST_SIGNOUT);