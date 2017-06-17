import React, { Component } from 'react'
import { connect } from 'react-redux'

import {sendMessage} from '../actions/messages'
import ErrorMessage from './ErrorMessage'

class Contact extends Component {

  constructor (props) {
    super(props)
    this.state = {
      sender_id: 1,
      profile_id: Number(this.props.match.params.id),
      subject: '',
      message: '',
      time: '2000-11-11 19:02:54',
      read: 'false'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick (event) {
     const { sender_id, profile_id, subject, message, time, read } = this.state  
     const messageData = {
         sender_id: sender_id, 
         profile_id: profile_id, 
         subject: subject, 
         message: message, 
         time: time, 
         read: read
    }
    this.props.sendMessage(messageData)
  }

  render () {
    const { sender_id, profile_id, subject, message, time, read } = this.state
    return (
      <div>
        <p><input name='subject' placeholder='Subject'
          onChange={this.handleChange} value={subject} /></p>

        <p><input name='message' placeholder='Message'
          onChange={this.handleChange} value={message} /></p>

        <button onClick={(e) => this.handleClick(e)}>
          Send
        </button>

        <ErrorMessage reducer='auth' />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (messageData) => {
      return dispatch(sendMessage(messageData))
    }
  }
}

// const meapDispatchToProps = (dispatch) => {
//   return {
//     registerUser: (creds) => {
//       return dispatch(registerUser(creds))
//     },
//     registerError: (message) => {
//       dispatch(registerError(message))
//     }
//   }
// }


export default connect(null, mapDispatchToProps)(Contact)

