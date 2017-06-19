import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import {sendMessage} from '../actions/messages'
import ErrorMessage from './ErrorMessage'

class Contact extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      profile_id: this.props.senderId,
      subject: '',
      message: '',
      time: '2000-02-02 12:12:12',
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
     const { profile_id, userId, subject, message, time, read } = this.state 
     const buildDate = moment().format('YYYY-MM-DD h:mm:ss')
     const messageData = {
         profile_id: profile_id, 
         userId: userId, 
         subject: subject, 
         message: message, 
         time: buildDate, 
         read: read
    }
    console.log(messageData)
    this.props.sendMessage(messageData)
    this.props.history.push('/messages')
  }

  render () {
    const { profile_id, userId, subject, message, time, read } = this.state
    return (
      <div className='container'>
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

function mapStateToProps (state) {
  console.log(state.senderId.senderId)
  return {
    userId: state.auth.userid.sub,
    senderId: state.senderId.senderId
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
