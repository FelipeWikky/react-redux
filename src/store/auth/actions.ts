import { action } from 'typesafe-actions'

import { Auth, AuthTypes } from './types'

export const requestSignIn = (auth:Auth) => action( AuthTypes.REQUEST_SIGNIN, {auth} );

export const signInSuccessful = (auth:Auth, token:string) => action(AuthTypes.SIGNIN_SUCCESS, {auth, token});

export const signInFailure = () => action(AuthTypes.SIGNIN_FAILURE);

export const requestSignUp = (auth:Auth) => action( AuthTypes.REQUEST_SIGNUP, {auth} );

export const requestsignOut = () => action(AuthTypes.REQUEST_SIGNOUT);