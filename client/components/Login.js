import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {login, requestLogin} from '../actions/loginauth0'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount () {
    this.props.loginCreds((err, firstTimeLogin) => {
      if (err) {
        return err
      }
      if (firstTimeLogin) {
        this.props.history.push('/profile/edit')
      } else {
        this.props.history.push('/')
      }
    })
  }

  handleLogin () {
    this.props.createLogin()
  }

  render () {
    return (
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
              <li><a href='#' onClick={this.handleLogin}>Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginCreds: (cb) => {
      return dispatch(login(cb))
    },
    createLogin: () => {
      return dispatch(requestLogin())
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
