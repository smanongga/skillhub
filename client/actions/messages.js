import request from '../utils/api'

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'

export function fetchMessages (userId) {
  return function (dispatch) {
    dispatch(requestMessages())
    request('get', `/messages/${userId}`)
    .then(res => {
      dispatch(receiveMessages(res.body.message))
    })
    .catch(err => dispatch(messageError(err.response.body.message)))
  }
}

export function receiveMessages (message) {
  return {
    type: MESSAGE_SUCCESS,
    isFetching: false,
    response: message
  }
}

function requestMessages () {
  return {
    type: MESSAGE_REQUEST,
    isFetching: true
  }
}

function messageError (message) {
  return {
    type: MESSAGE_FAILURE,
    isFetching: false,
    message
  }
}
