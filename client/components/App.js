import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {login, requestLogin} from '../actions/loginauth0'

import Navbar from './Navbar'
import Inbox from './Inbox'

const App = () => (
  <Router>
    <div className='app'>
      <Navbar />
      <Switch>
        <Route path='/messages/:id' component={Inbox} />
      </Switch>
    </div>
  </Router>
)

export default App
