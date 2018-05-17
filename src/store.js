import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer } from 'react-router-redux'
import { fork } from 'redux-saga/effects'
import fbAuth from './reducers/fb'
import googleAuth from './reducers/google'
import thunk from 'redux-thunk';
import auth from './auth/reducer'
import userReucer from './users/reducer'
import UsersSagas from './users/sagas'
import authSagas from './auth/sagas'
import { types as logoutTypes } from './Navbar/LogoutButton/actions'
import { types as loginTypes } from './auth/actions'

const reduxWebtoolsBrowserExtension = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__() ||
  ((s) => s)

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield fork(authSagas)
  yield fork(UsersSagas)
}

const appReducer = combineReducers({
  fbAuth,
  googleAuth,
  auth,
  userReucer,
  routing: routerReducer,
})

const rootReducer = (state, action) => {
  if (action.type === logoutTypes.LOGOUT){
    state = undefined
    localStorage.removeItem("currentUser");
  }
  return appReducer(state, action)
}

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(sagaMiddleware, thunk),
    reduxWebtoolsBrowserExtension,
  )
)

store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())))

sagaMiddleware.run(rootSaga)

export default store
