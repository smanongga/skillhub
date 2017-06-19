import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {BrowserHistory} from 'react-router'

import {login, requestLogin} from '../actions/loginauth0'

import Navbar from './Navbar'
import Inbox from './Inbox'
import Sent from './Sent'
import EditProfile from './EditProfile'
import ViewProfile from './ViewProfile'
import CategoriesList from './CategoriesList'
import CategoryPage from './CategoryPage'
import UserProfile from './UserProfile'
import Contact from './Contact'
import Home from './Home'
import WaitingIndicator from './WaitingIndicator'
import About from './About'
import Frontpage from './Frontpage'
import Footer from './Footer'

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
      <Router history={BrowserHistory}>
        <div className='app'>
          {!this.props.isAuthenticated && <Route path='/' component={Frontpage} />}
          <Navbar />
          {this.props.waiting && <WaitingIndicator />}
          {this.props.isAuthenticated &&
          <Switch>
            <Route path='/messages' component={Inbox} />
            <Route path='/sent' component={Sent} />
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={UserProfile} />
            <Route exact path='/profile/edit' component={EditProfile} />
            <Route exact path='/profiles/:id' component={ViewProfile} />
            <Route exact path='/skills/:id' component={CategoryPage} />
            <Route path='/categories' component={CategoriesList} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
        }
          <Footer />
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
      return dispatch(requestLogin(cb))
    }
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    waiting: state.waiting
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
