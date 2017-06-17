import request from '../utils/api'

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'
export const SEND_REQUEST    = 'SEND_REQUEST'
export const READ_REQUEST    = 'READ_REQUEST'
export const READ_SUCCESS    = 'READ_SUCCESS'
export const READ_FAILURE    = 'READ_FAILURE'

export function fetchMessages (userId) {
  return function (dispatch) {
    dispatch(requestMessages())
    return request('get', `/messages/${userId}`)
    .then(res => {
      dispatch(receiveMessages(res.body.result))
    })
    .catch(err => {
      dispatch(messageError(err.response.body.message))
    })
  }
}

// export function sendMessage (messageData) {
//   return dispatch => {
//     // We dispatch sendMessage to kickoff the call to the API
//     dispatch(requestSendMessage(messageData))

//     return request('post', '/contact', messageData)
//       .then(res => {
//       dispatch(receiveMessages(res.body.result))
//      })
//     .catch(err => {
//         dispatch(messageError(err.response.body.message))
//       })
//   }
// }

export function readMessage (readId) {
  return dispatch => {
    // We dispatch sendMessage to kickoff the call to the API
    dispatch(requestReadMessage(readId))

    return request('post', '/readmessage', readId)
      .then(res => {
      dispatch(receiveMessages(res.body.result))
     })
    .catch(err => {
        dispatch(messageError(err.response.body.message))
      })
  }
}

export function readComplete (readId) {
  return {
    type: READ_SUCCESS,
    isFetching: false,
    response: readId
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

function requestReadMessage (id) {
  return {
    type: READ_REQUEST,
    isFetching: true,
    id
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
