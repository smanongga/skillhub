import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {mapSenderId} from '../actions/index'

import {fetchFeedback} from '../actions/feedback'

const months = ['null', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class Feedback extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleFeedbackClick = this.handleFeedbackClick.bind(this)
  }

  componentWillMount () {
    const profileId = this.props.pageId
    this.props.fetchFeedback(profileId)
  }

  componentWillReceiveProps (nextProps) {
    const oldId = this.props.pageId
    const newId = nextProps.pageId
    if (newId !== oldId) {
      this.props.fetchFeedback(newId)
    }
  }

  handleFeedbackClick () {
    const senderId = this.props.pageId
    this.props.mapSenderId(senderId)
    this.props.redirect('/postfeedback')
  }

  render () {
    return (
      <div className='col-md-12'>
        <FeedbackList feedback={this.props.feedback} feedbackClick={this.handleFeedbackClick} pageId={this.props.pageId} userId={this.props.userId} />
      </div>
    )
  }
}

const FeedbackList = ({ feedback, feedbackClick, userId }) => {
  if (feedback.length === 0)
    return (
      <div>
        <h2 className='title'>Feedback</h2>
      {!userId &&
        <button className='btn btn-primary btn-sm' onClick={() => feedbackClick()}>Post Feedback</button>}
        <div className='message-list empty'>
          Nothing to see here, great job!
        </div>

      </div>
    )


  return (
    <div>
      <h2 className='title'>Feedback</h2> {!userId &&
        <a onClick={() => feedbackClick()}>+ Add Feedback</a>}
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
    fetchFeedback: (id) => dispatch(fetchFeedback(id)),
    mapSenderId: (senderId) => dispatch(mapSenderId(senderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
