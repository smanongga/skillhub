import React from 'react'
import Navbar from './Navbar'
import EditProfile from './EditProfile'
import {connect} from 'react-redux'
import {login, requestLogin} from '../actions/loginauth0'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.props.loginCreds()
  }

  render () {
    return (
      <div>
        <h1>SkillHub</h1>
        <Navbar />
        <button onClick={() => this.props.createLogin()}>Log In</button>
        <div className='quote'>
          <EditProfile />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginCreds: () => {
      return dispatch(login())
    },
    createLogin: () => {
      return dispatch(requestLogin())
    }
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
