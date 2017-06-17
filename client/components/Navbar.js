import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import Logout from './Logout'

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav>
      <div>
        {isAuthenticated &&
          <Logout />
          }
        {isAuthenticated &&
          <div>
            <h5><Link to='/profile'>Profile</Link></h5>
            <h5><a href='#'>My Inbox</a></h5>
            <h5><a href='#'>Teach</a></h5>
            <h5><a href='#'>Learn</a></h5>
            </div>}
        <hr />
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
