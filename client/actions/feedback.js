import request from '../utils/api'

import {waitingIndicator, notWaiting} from './index'
export const SEND_REQUEST = 'SEND_REQUEST'
export const SEND_SUCCESS = 'SEND_SUCCESS'
export const SEND_FAILURE = 'SEND_FAILURE'
export const FEEDBACK_REQUEST = 'FEEDBACK_REQUEST'
export const FEEDBACK_SUCCESS = 'FEEDBACK_SUCCESS'
export const FEEDBACK_FAILURE = 'FEEDBACK_FAILURE'

export function fetchFeedback (id) {
  return function (dispatch) {
    dispatch(waitingIndicator())
    dispatch(requestFeedback(id))
    return request('get', '/feedback', id)
     .then(res => {
       dispatch(notWaiting())
       dispatch(receiveFeedback(res.body.result))
     })
     .catch(err => {
       dispatch(feedbackError(err.message))
     })
  }
}

export function receiveFeedback (feedback) {
  return {
    type: FEEDBACK_SUCCESS,
    isFetching: false,
    response: feedback
  }
}

function requestFeedback () {
  return {
    type: FEEDBACK_REQUEST,
    isFetching: true
  }
}

function feedbackError (feedback) {
  return {
    type: FEEDBACK_FAILURE,
    isFetching: false,
    feedback
  }
}

export function postFeedback (feedbackData) {
  return dispatch => {
    // We dispatch sendMessage to kickoff the call to the API
    dispatch(waitingIndicator())
    dispatch(requestSendFeedback(feedbackData))
    return request('post', '/feedback', feedbackData)
      .then(res => {
        dispatch(notWaiting())
        dispatch(sendComplete(res.body.result))
      })
    .catch(err => {
      dispatch(messageError(err.response.body.message))
    })
  }
}

function requestSendFeedback (feedbackData) {
  return {
    type: SEND_REQUEST,
    isFetching: true,
    feedbackData
  }
}

export function sendComplete (feedbackData) {
  return {
    type: SEND_SUCCESS,
    isFetching: false,
    response: feedbackData
  }
}

function messageError (feedbackData) {
  return {
    type: SEND_FAILURE,
    isFetching: false,
    feedbackData
  }
}
