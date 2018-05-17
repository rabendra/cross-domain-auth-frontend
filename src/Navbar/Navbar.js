import React from 'react'
import { Link } from 'react-router'
import {
  Navbar,
} from 'react-bootstrap'

import LogoutButton from './LogoutButton'

const _Navbar = (props) =>
  <Navbar>
    <div className='container-fluid'>
      <Navbar.Brand>Auth App!</Navbar.Brand>
      <Navbar.Form>
        { props.isAuthenticated ?
          (<div>
                      <Link className='btn btn-default' to='/'>Home</Link>
                      {' '}
                      <LogoutButton />
                    </div> ) : (<div>
                                <Link className='btn btn-default' to='/signup'>Signup</Link>
                                {' '}
                                <Link className='btn btn-default' to='/signin'>Signin</Link>
                              </div>)
        }
      </Navbar.Form>
    </div>
  </Navbar>

_Navbar.propTypes = {
  children: React.PropTypes.node,
}

export default _Navbar
