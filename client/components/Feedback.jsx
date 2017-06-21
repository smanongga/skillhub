import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {mapSenderId} from '../actions/index'

import {fetchFeedback} from '../actions/feedback'

import PostFeedback from './PostFeedback'

const months = ['null', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class Feedback extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {
    const profileId = this.props.pageId
    this.props.fetchFeedback(profileId)
    // this.props.mapSenderId(profileId)
  }

  componentWillReceiveProps (nextProps) {
    const oldId = this.props.pageId
    const newId = nextProps.pageId
    if (newId !== oldId) {
      this.props.fetchFeedback(newId)
    }
  }

  render () {
    return (
      <div className='col-md-12'>
        {!this.props.userId && <PostFeedback pageId={this.props.pageId} />}
        <FeedbackList feedback={this.props.feedback} pageId={this.props.pageId} userId={this.props.userId} />
      </div>
    )
  }
}

const FeedbackList = ({ feedback, userId }) => {
  if (feedback.length === 0)
    return (
      <div>
        <div className='message-list empty'>
          Feedback from other users will show here
        </div>
      </div>
    )

  return (
    <div>
      <div>
        {feedback.map((feedbackDetails, key) => {
          return (
            <div key={key}>
              <FeedbackItem feedbackDetails={feedbackDetails} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const FeedbackItem = ({feedbackDetails}) => {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <div className='feedback-profile'>
          <Link to={`/profiles/${feedbackDetails.commenterId}`}><img src={feedbackDetails.photoUrl} /></Link>
          <div className='feedback-date'>{getPrettyDate(feedbackDetails.time)}</div>
        </div>
      </div>
      <div className='col-md-10'>
        <Link to={`/profiles/${feedbackDetails.commenterId}`}>
          <span className='feedback-name'>
            {feedbackDetails.firstName} {feedbackDetails.lastName} </span></Link> said:
        <p>{feedbackDetails.message}</p>
      </div>
    </div>
  )
}

// Helper methods
const getPrettyDate = (date) => {
  date = date.split(' ')[0]
  const newDate = date.split('-')
  const monthFix = Number(newDate[1])
  const month = months[monthFix]
  return `${month} ${newDate[2]}, ${newDate[0]}`
}

function mapStateToProps (state) {
  return {
    feedback: state.feedback
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchFeedback: (id) => dispatch(fetchFeedback(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
