import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects'
import * as api from './api'
import {
  requestAuth,
  receiveAuth,
  receiveAuthError,
} from './actions'
import { types as fbAuthTypes } from '../fbAuth/actions'

import { GOOGLE_LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNIN_REQUEST } from '../actions/actionTypes'

function setAuthToken(response) {
  debugger
  localStorage.setItem("currentUser",
response.accessToken)
}

// function executeCode() {
//   let mountNode = React.findDOMNode(this.refs.mount);
 
//   try {
//     React.unmountComponentAtNode(mountNode);
//   } catch (e) {
//     console.error(e);
//   }
// }

function * _requestAuth (params) {
  debugger
  try {
    yield put(requestAuth(params))
    const response = yield call(api.requestAuth, params)
    yield put(receiveAuth(response))
    yield call(setAuthToken(response)) 
  } catch (error) {
    yield put(receiveAuthError(error))
  }
}

function * _requestSignup (params) {
  try {
    // yield put(requestAuth(params))
    const response = yield call(api.createUser, params)
    yield put(receiveAuth(response))
    yield call(setAuthToken(response))
  } catch (error) {
    yield put(receiveAuthError(error))
  }
}

function * _requestSignin (params) {
  try {
    // yield put(requestAuth(params))
    const response = yield call(api.loginUser, params)
    yield put(receiveAuth(response))
    yield call(setAuthToken(response))
  } catch (error) {
    yield put(receiveAuthError(error))
  }
}

export default function* watcher () {
  yield takeLatest(fbAuthTypes.LOGIN_SUCCESS, (data) =>
    _requestAuth({ provider: 'facebook', oauthAccessToken: data.user.accessToken, user: data.user })
  )

  yield takeLatest(GOOGLE_LOGIN_SUCCESS, (data) =>
    _requestAuth({ provider: 'google', oauthAccessToken: data.user.accessToken, user: data.user.profileObj })
  )

  yield takeLatest(SIGNUP_REQUEST, (data) =>
    _requestSignup({ user: data.user })
  )

  yield takeLatest(SIGNIN_REQUEST, (data) =>
    _requestSignin({ user: data.user })
  )
}
