import request from '../utils/api'

import {waitingIndicator, notWaiting} from './index'

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'
export const SENT_REQUEST    = 'SENT_REQUEST'
export const SENT_SUCCESS    = 'SENT_SUCCESS'
export const SENT_FAILURE    = 'SENT_FAILURE'
export const SEND_REQUEST    = 'SEND_REQUEST'
export const SEND_SUCCESS    = 'SEND_SUCCESS'
export const SEND_FAILURE    = 'SEND_FAILURE'

export function receiveMessages (messages) {
  return {
    type: MESSAGE_SUCCESS,
    isFetching: false,
    response: messages
  }
}

function requestMessages () {
  return {
    type: MESSAGE_REQUEST,
    isFetching: true
  }
}

function messageError (messages) {
  return {
    type: MESSAGE_FAILURE,
    isFetching: false,
    messages: []
  }
}

export function receiveSentMessages (sentMessages) {
  return {
    type: SENT_SUCCESS,
    isFetching: false,
    response: sentMessages
  }
}

function requestSentMessages () {
  return {
    type: SENT_REQUEST,
    isFetching: true,
    messages: []
  }
}

function messageSentError () {
  return {
    type: SENT_FAILURE,
    isFetching: false,
    messages: []
  }
}

function requestSendMessage () {
  return {
    type: SEND_REQUEST,
    isFetching: true,
    messages: []
  }
}

export function sendComplete () {
  return {
    type: SEND_SUCCESS,
    isFetching: false,
    messages: []
  }
}

export function fetchMessages () {
  return function (dispatch) {
    dispatch(waitingIndicator())
    dispatch(requestMessages())
    return request('get', '/messages')
    .then(res => {
      dispatch(notWaiting())
      dispatch(receiveMessages(res.body.result))
    })
    .catch(err => {
      dispatch(messageError(err.response.body.message))
    })
  }
}

export function fetchSentMessages () {
  return function (dispatch) {
    dispatch(waitingIndicator())
    dispatch(requestSentMessages())
    return request('get', `/sent`)
    .then(res => {
      dispatch(receiveSentMessages(res.body.result))
      dispatch(notWaiting())
    })
  }
}

export function readMessage (readId) {
  return dispatch => {
    dispatch(requestReadMessage(readId))
    return request('post', '/readmessage', readId)
      .then(res => {
        dispatch(readComplete(res.body.result))
      })
    .catch(err => {
      dispatch(readError(err.response.body.message))
    })
  }
}

export function sendMessage (messageData) {
  return dispatch => {
    dispatch(waitingIndicator())
    dispatch(requestSendMessage(messageData))
    return request('post', '/contact', messageData)
      .then(res => {
        dispatch(notWaiting())
        dispatch(sendComplete(res.body.result))
      })
  }
}
