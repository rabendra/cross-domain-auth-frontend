import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import App from './App'
import Welcome from './Welcome'
import Signup from './userAuth/Signup/Signup'
import Signin from './userAuth/Signin/Signin'

const history = syncHistoryWithStore(browserHistory, store)
if (localStorage.currentUser != undefined){
	history.push(`/`)
}

export default () =>
  <Router history={history}>
    <Route exact path='/' component={App} >
      <IndexRoute component={Welcome}/>
      <Route exact path='signup' component={Signup}/>
      <Route exact path='signin' component={Signin}/>
    </Route>
  </Router>
