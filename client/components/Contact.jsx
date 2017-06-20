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
    const { profile_id, userId, subject, message, read } = this.state
    const buildDate = moment().format('YYYY-MM-DD h:mm:ss')
    const messageData = {
      profile_id: profile_id,
      userId: userId,
      subject: subject,
      message: message,
      time: buildDate,
      read: read
    }
    this.props.sendMessage(messageData)
    this.props.history.push('/messages')
  }

  render () {
    const { subject, message } = this.state
    return (
      <div className='container'>
        <h1>Send Message</h1>
        <p><input className='form-control' name='subject' placeholder='Subject'
          onChange={this.handleChange} value={subject} /></p>
        <textarea className='form-control' name='message' placeholder='Message'
          onChange={this.handleChange} value={message} />
        <button className='btn btn-primary' onClick={(e) => this.handleClick(e)}>
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
  return {
    userId: state.auth.userid.sub,
    senderId: state.senderId.senderId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
