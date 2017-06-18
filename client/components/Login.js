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
      <div>
        <div className='frontpage'>
          <nav className='navbar navbar-default not-loggedin'>
            <div className='container'>
              <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
                <Link to='/'> <img src='/skillHub-logo-front.png' /></Link>
              </div>
              <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav navbar-right'>
                  <li><a href='#' onClick={this.handleLogin}>Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='jumbotron'>
            <div className='container'>
              <h2 className='slogan'><span className='first'>Teach</span>. Learn. <span className='second'>Connect</span>. </h2>
            </div>
          </div>
        </div>
        <div className='you-can-learn'>
          <div className='container'> <h2>How skillHub works</h2>
            <div className='row'>
              <div className='col-md-6'><div className='box-item'>Arts</div></div>
              <div className='col-md-6'><div className='box-item'>Tech</div></div>
            </div>
          </div>
        </div>

        <div className='you-can-learn'>
          <div className='container'> <h2>See what you can learn</h2>
            <div className='row'>
              <div className='col-md-4'><div className='box-item'>Arts</div></div>
              <div className='col-md-4'><div className='box-item'>Tech</div></div>
              <div className='col-md-4'><div className='box-item'>Music</div></div>
            </div>
          </div>
        </div>
      </div>
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
