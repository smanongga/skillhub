import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {mapSenderId} from '../actions/index'

// import FeedbackItem from './FeedbackItem'
import {fetchFeedback} from '../actions/feedback'

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
      <div className='col-md-4'>
        <FeedbackList feedback={this.props.feedback} feedbackClick={this.handleFeedbackClick} />
      </div>
    )
  }
}

const FeedbackList = ({ feedback, feedbackClick }) => {
  if (feedback.length === 0) {
    return (
      <div>
        <button className='btn btn-primary btn-sm' onClick={() => feedbackClick()}>Post Feedback</button>
        <div className='message-list empty'>
          Nothing to see here, great job!
        </div>
      </div>
    )
  }

  return (
    <div>
      <button className='btn btn-primary btn-sm' onClick={() => feedbackClick()}>Post Feedback</button>
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
        <p>{feedbackDetails.message}</p>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    feedback: state.feedback.feedback
  }
}

function mapDispatchToProps (dispatch) {
  console.log('Calling the map dispatch to props...')
  return {
    fetchFeedback: (id) => dispatch(fetchFeedback(id)),
    mapSenderId: (senderId) => dispatch(mapSenderId(senderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
