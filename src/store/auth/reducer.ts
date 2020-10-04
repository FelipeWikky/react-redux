import { Reducer } from "redux";
import { AuthState, AuthTypes } from "./types";

const INITIAL_STATE:AuthState = {
  auth:{email:'', password:''},
  token: null,
  signing: false,
  error: false,
  logged: false,
}

const reducer:Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.REQUEST_SIGNIN:
      return {...state, signing: true}
    case AuthTypes.SIGNIN_SUCCESS:
      return {...state, auth:action.payload.auth, token: action.payload.token, signing: false, logged: true}
    case AuthTypes.SIGNIN_FAILURE:
      return {...state, signing: false, error: true }

    case AuthTypes.REQUEST_SIGNUP:
      return {...state}
    case AuthTypes.SIGNUP_SUCCESS:
      return {...state, auth:action.payload.auth}
    case AuthTypes.SIGNUP_FAILURE:
      return {...state, error: true }

    case AuthTypes.REQUEST_SIGNOUT:
      return {...state, auth:{}, signing:false, error: false, token:null, logged: false}
    default:
      return state;
  }
}

export default reducer;