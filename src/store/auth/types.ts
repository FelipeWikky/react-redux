export interface AuthState {
  readonly auth:Auth,
  readonly signing: boolean,
  readonly token: string | null,
  readonly error: boolean,
}

export interface Auth {
  email: string,
  password: string,
}

export enum AuthTypes {
  REQUEST_SIGNIN = '@auth/REQUEST_SIGNIN',
  SIGNIN_SUCCESS = '@auth/SIGNIN_SUCCESS',
  SIGNIN_FAILURE = '@auth/SIGNIN_FAILURE',

  REQUEST_SIGNUP = '@auth/REQUEST_SIGNUP',

  REQUEST_SIGNOUT = '@auth/REQUEST_SIGNOUT',
}