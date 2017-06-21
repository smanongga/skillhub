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
      <div className='col-md-4'>
        <FeedbackList feedback={this.props.feedback} pageId={this.props.pageId} userId={this.props.userId} />
        {!this.props.userId && <PostFeedback pageId={this.props.pageId} />}
      </div>
    )
  }
}

const FeedbackList = ({ feedback, userId }) => {
  if (feedback.length === 0)
    return (
      <div>
        <div className='message-list empty'>
          Nothing to see here, great job!
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
    <div>
      <div className='message-item__details'>
        <Link to={`/profiles/${feedbackDetails.commenterId}`}>{feedbackDetails.firstName} {feedbackDetails.lastName}</Link>
      </div>
      <div>
        <p>{getPrettyDate(feedbackDetails.time)}</p>
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
