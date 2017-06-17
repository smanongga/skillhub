import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {login, requestLogin} from '../actions/loginauth0'

import Navbar from './Navbar'
import Inbox from './Inbox'
import EditProfile from './EditProfile'
import Profile from './Profile'
import Categories from './Categories'
import Contact from './Contact'
import Login from './Login'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin () {
    this.props.createLogin()
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <h1>SkillHub</h1>
          {!this.props.isAuthenticated && <Route path='/' component={Login} />}
          <Navbar />
          <Switch>>
            <Route path='/messages/:id' component={Inbox} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/profile/edit' component={EditProfile} />
            <Route path='/categories' component={Categories} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginCreds: (cb) => {
      return dispatch(login(cb))
    },
    createLogin: (cb) => {
      console.log(cb)
      return dispatch(requestLogin(cb))
    }
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

