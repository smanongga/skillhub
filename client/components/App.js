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

class App extends React.Component {
  constructor (props) {
    super(props)
    this.props.loginCreds()
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <h1>SkillHub</h1>
          <Navbar />
          <button onClick={() => this.props.createLogin()}>Log In</button>
          <Switch>
            <Route path='/profiles/:id' component={Profile} />
            <Route path='/profiles/:id/edit' component={EditProfile} />
            <Route path='/messages/:id' component={Inbox} />
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

