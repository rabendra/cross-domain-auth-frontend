import React from 'react'
import TopNavbar from './Navbar/'
import Signup from './userAuth/Signup/Signup'
import Signin from './userAuth/Signin/Signin'
import Users from './users/UsersList'
import Welcome from './Welcome'
import { connect } from 'react-redux'

export const App = (props) =>{
  debugger
  return (
  <div className="App">
    <TopNavbar
      isAuthenticated={props.isAuthenticated}
    />
    <div>{ ((props['location'].pathname === "/") && (props.isAuthenticated === false)) ? <Users /> : ""}</div>,
    <div>{ ((props['location'].pathname === "/signin") || (props['location'].pathname === "/signup")) ? props.children : ""}</div>
    {(localStorage.currentUser !== undefined) ? props.children : ""}
  </div>)
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
