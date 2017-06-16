import React from 'react'
import {connect} from 'react-redux'

import {login, requestLogin} from '../actions/loginauth0'

import Navbar from './Navbar'
import EditProfile from './EditProfile'
import Profile from './Profile'
import Categories from './Categories'
import Inbox from './Inbox'

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
        <Inbox emails={[
	{
		"from": "Maxime Preaux",
		"address": "maxime@codepen.io",
		"time": "2016-10-07 15:35:14",
		"message": "This is my first attempt at using React.\nDuis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras",
		"subject": "Messing with React.js",
		"tag": "inbox",
		"read": "false"
	},
	{
		"from": "Dribbble",
		"address": "digest@dribbble.com",
		"time": "2016-05-09 14:23:54",
		"message": "Here are the latest shots from Dribbblers you follow! Nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
		"subject": "Dribbble Digest",
		"tag": "inbox",
		"read": "false"
	}]} />
        <button onClick={() => this.props.createLogin()}>Log In</button>
        <div className='quote'>
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
