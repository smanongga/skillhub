import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import {postFeedback, fetchFeedback} from '../actions/feedback'
import ErrorMessage from './ErrorMessage'

class PostFeedback extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      profile_id: this.props.pageId,
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
  }

  render () {
    const {message} = this.state
    return (
      <div>
        <h3>Post Feedback</h3>
        <textarea className='form-control' name='message' placeholder='Feedback here'
          onChange={this.handleChange} value={message} />
        <button className='btn btn-primary' onClick={(e) => this.handleClick(e)}>
          + Add Feedback
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
    userId: state.auth.userid.sub
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeedback)
