import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {login, requestLogin} from '../actions/loginauth0'

import Navbar from './Navbar'
import EditProfile from './EditProfile'
import Profile from './Profile'
import Categories from './Categories'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.props.loginCreds()
  }

  render () {
    return (
      <Router>
        <div>
          <h1>SkillHub</h1>
          <Navbar />
          <button onClick={() => this.props.createLogin()}>Log In</button>
          <Route path='/profile/edit'>{this.props.isAuthenticated && <EditProfile />}</Route>
        </div>
      </Router>
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
