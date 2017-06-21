import request from '../utils/api'

import {waitingIndicator, notWaiting} from './index'

export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const SENT_REQUEST    = 'SENT_REQUEST'
export const SENT_SUCCESS    = 'SENT_SUCCESS'

export function fetchMessages () {
  return function (dispatch) {
    dispatch(waitingIndicator())
    return request('get', '/messages')
    .then(res => {
      dispatch(notWaiting())
      dispatch(receiveMessages(res.body.result))
    })
  }
}

export function receiveMessages (messages) {
  return {
    type: MESSAGE_SUCCESS,
    response: messages
  }
}

export function fetchSentMessages () {
  return function (dispatch) {
    dispatch(waitingIndicator())
    return request('get', `/sent`)
    .then(res => {
      dispatch(notWaiting())
      dispatch(receiveSentMessages(res.body.result))
    })
  }
}

export function receiveSentMessages (sentMessages) {
  return {
    type: SENT_SUCCESS,
    response: sentMessages
  }
}

export function sendMessage (messageData) {
  return dispatch => {
    dispatch(waitingIndicator())
    return request('post', '/contact', messageData)
      .then(
        dispatch(notWaiting())
      )
  }
}
