import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import {postFeedback} from '../actions/feedback'
import ErrorMessage from './ErrorMessage'

class PostFeedback extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      profile_id: this.props.senderId,
      message: '',
      time: '2000-02-02 12:12:12'
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
    const {profile_id, userId, message} = this.state
    const buildDate = moment().format('YYYY-MM-DD h:mm:ss')
    const feedbackData = {
      profile_id: profile_id,
      userId: userId,
      message: message,
      time: buildDate
    }
    this.props.postFeedback(feedbackData)
    console.log('PROFILE ID FROM STATE:', this.state.profile_id)
    this.props.history.push(`/profiles/${this.state.profile_id}`)
  }

  render () {
    const {message} = this.state
    return (
      <div className='container'>
        <h1>Post Feedback</h1>
        <textarea className='form-control' name='message' placeholder='Feedback here'
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
    postFeedback: (feedbackData) => {
      return dispatch(postFeedback(feedbackData))
    }
  }
}

function mapStateToProps (state) {
  return {
    userId: state.auth.userid.sub,
    senderId: state.senderId.senderId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeedback)
