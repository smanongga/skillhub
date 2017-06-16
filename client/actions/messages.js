import request from '../utils/api'

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'

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
