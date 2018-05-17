import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects'
import * as api from './api'
import {
  types,
  fetchUserList,
  receiveUsers,
  receiveUsersError,
} from './actions'

function * fetchUsers () {
  try {
    const data = yield call(api.fetchUsers)
    yield put(receiveUsers(data))
  } catch (error) {
    yield put(receiveUsersError(error))
  }
}

export default function* watcher () {
  yield takeLatest(types.LIST_REQUEST, fetchUsers)
}
