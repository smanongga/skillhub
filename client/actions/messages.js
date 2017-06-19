import request from '../utils/api'

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'
export const SENT_REQUEST    = 'SENT_REQUEST'
export const SENT_SUCCESS    = 'SENT_SUCCESS'
export const SENT_FAILURE    = 'SENT_FAILURE'
export const SEND_REQUEST    = 'SEND_REQUEST'
export const SEND_SUCCESS    = 'SEND_SUCCESS'
export const SEND_FAILURE    = 'SEND_FAILURE'
export const READ_REQUEST    = 'READ_REQUEST'
export const READ_SUCCESS    = 'READ_SUCCESS'
export const READ_FAILURE    = 'READ_FAILURE'

export function fetchMessages () {
  return function (dispatch) {
    dispatch(requestMessages())
    return request('get', '/messages')
    .then(res => {
      dispatch(receiveMessages(res.body.result))
    })
    .catch(err => {
      dispatch(messageError(err.response.body.message))
    })
  }
}

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
    messages
  }
}

export function fetchSentMessages (userId) {
  return function (dispatch) {
    dispatch(requestMessages())
    return request('get', `/sent`)
    .then(res => {
      dispatch(receiveMessages(res.body.result))
    })
    .catch(err => {
      dispatch(messageSentError(err.response.body.message))
    })
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
    isFetching: true
  }
}

function messageSentError (sentMessages) {
  return {
    type: SENT_FAILURE,
    isFetching: false,
    sentMessages
  }
}

export function readMessage (readId) {
  return dispatch => {
    // We dispatch sendMessage to kickoff the call to the API
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

function requestReadMessage (readId) {
  return {
    type: READ_REQUEST,
    isFetching: true,
    readId
  }
}

export function readComplete (readId) {
  return {
    type: READ_SUCCESS,
    isFetching: false,
    response: readId
  }
}

function readError (readId) {
  return {
    type: READ_FAILURE,
    isFetching: false,
    readId
  }
}

export function sendMessage (messageData) {
  return dispatch => {
    // We dispatch sendMessage to kickoff the call to the API
    dispatch(requestSendMessage(messageData))

    return request('post', '/contact', messageData)
      .then(res => {
        dispatch(sendComplete(res.body.result))
      })
    .catch(err => {
      dispatch(messageError(err.response.body.message))
    })
  }
}

function requestSendMessage (messageData) {
  return {
    type: SEND_REQUEST,
    isFetching: true,
    messageData
  }
}

export function sendComplete (messageData) {
  return {
    type: SEND_SUCCESS,
    isFetching: false,
    response: messageData
  }
}

function messageError (messageData) {
  return {
    type: SEND_FAILURE,
    isFetching: false,
    messageData
  }
}
