import request from '../utils/api'

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'
export const SEND_REQUEST    = 'SEND_REQUEST'

export function fetchMessages (userId) {
  return function (dispatch) {
    dispatch(requestMessages())
    return request('get', `/messages/${userId}`)
    .then(res => {
      dispatch(receiveMessages(res.body.result))
    })
    .catch(err => dispatch(messageError(err.response.body)))
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

function requestSendMessage (messageData) {
  return {
    type: SEND_REQUEST,
    isFetching: true,
    messageData
  }
}

export function sendMessage (messageData) {
  return dispatch => {
    // We dispatch sendMessage to kickoff the call to the API
    dispatch(requestSendMessage(messageData))

    return request('post', '/contact', messageData)
      .then(res => {
      dispatch(receiveMessages(res.body.result))
     })
    .catch(err => {
        dispatch(messageError(err.response.body.message))
      })
  }
}
