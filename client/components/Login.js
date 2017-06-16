import React from 'react'
import {connect} from 'react-redux'

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
    return (<button onClick={this.handleLogin}>Log In</button>)
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
