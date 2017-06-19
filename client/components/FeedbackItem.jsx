import {connect} from 'react-redux'
import React from 'react'

function FeedbackItem (props) {
  console.log(this.props)
  return (
    <div>
      <p>{props.feedbackItem}</p>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    userId: state.auth.user.id
  }
}

export default connect(mapStateToProps)(FeedbackItem)
