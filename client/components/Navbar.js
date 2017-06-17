import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import Logout from './Logout'

const Navbar = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated &&
    <nav className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand' href='/'>SkillHub</a>
        </div>

        <div id='navbar' className='navbar-collapse collapse'>

          <ul className='nav navbar-nav'>
                <li><Link to='/profile'>Profile</Link></li>
                <li><a href='#'>My Inbox</a></li>
                <li><a href='#'>Teach</a></li>
                <li><a href='#'>Learn</a></li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Logout />
                </li>
          </ul>
        </div>
      </div>
    </nav>
  }
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
