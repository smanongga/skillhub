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
import CategoryPageTest from './CategoryPageTest'
import UserProfile from './UserProfile'
import Contact from './Contact'
import WaitingIndicator from './WaitingIndicator'
import About from './About'
import Frontpage from './Frontpage'
import Footer from './Footer'
import Login from './Login'
import ErrorMessage from './ErrorMessage'
import PostFeedback from './PostFeedback'

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
          <Navbar />
          <ErrorMessage />
          {this.props.waiting && <WaitingIndicator />}
          {!this.props.isAuthenticated &&
            <Switch>
              <Route exact path='/' component={Frontpage} />
              <Route path='/skills/:id' component={CategoryPageTest} />
            </Switch>
            }
          {this.props.isAuthenticated &&
          <Switch>
            <Route path='/messages' component={Inbox} />
            <Route path='/sent' component={Sent} />
            <Route exact path='/' component={CategoriesList} />
            <Route exact path='/profile' component={UserProfile} />
            <Route exact path='/profile/edit' component={EditProfile} />
            <Route exact path='/profiles/:id' component={ViewProfile} />
            <Route exact path='/skills/:id' component={CategoryPage} />
            <Route path='/categories' component={CategoriesList} />
            <Route path='/contact' component={Contact} />
            <Route path='/postfeedback' component={PostFeedback} />
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
