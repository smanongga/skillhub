import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router , Link} from 'react-router-dom'

// import FeedbackItem from './FeedbackItem'
import {fetchFeedback} from '../actions'

class Feedback extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
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

  render () {
    return (
      <div className='col-md-4'>
        <FeedbackList feedback={this.props.feedback} />
      </div>
    )
  }
}

const FeedbackList = ({ feedback }) => {
  if (feedback.length === 0) {
    return (
      <div className='message-list empty'>
        Nothing to see here, great job!
      </div>
    )
  }

  return (
    <div>
      <button>New Feedback</button>
      {feedback.map((feedbackDetails, key) => {
        return (
          <div key={key}>
            <FeedbackItem feedbackDetails={feedbackDetails} />
          </div>
        )
      })}
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
  return {
    fetchFeedback: (id) => dispatch(fetchFeedback(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
