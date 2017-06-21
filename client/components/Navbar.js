import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Link } from 'react-router-dom'

import Logout from './Logout'
import Login from './Login'
import About from './About'

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
              <Link to='/'> <img src='/skillHub-logo.png' /></Link>
            </div>
            <div id='navbar' className='navbar-collapse collapse'>
              <ul className='nav navbar-nav navbar-right'>
                <li><Link to='/profile'>My Profile</Link></li>
                <li><Link to='/messages'>My Messages </Link></li>
                <li><Link to='/categories'>Teach & Learn</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>
                  <Route path='/' component={Logout} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }
      {!isAuthenticated &&
        <nav className='navbar navbar-default not-loggedin'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <Link to='/'> <img src='/skillHub-logo.png' /></Link>
            </div>
            <div id='navbar' className='navbar-collapse collapse'>
              <ul className='nav navbar-nav navbar-right'>
                <li><Route path='/about' component={About} /></li>
                <li><Route path='/' component={Login} /></li>
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
