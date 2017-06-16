import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_FAILURE
} from '../actions/messages'

const initialState = {
  isFetching: false,
  errorMessage: '',
  messages: []
}

export default function messages (state = initialState, action) {
  switch (action.type) {
    case MESSAGE_REQUEST:
      return {
        isFetching: true,
        errorMessage: '',
        messages: []
      }
    case MESSAGE_SUCCESS:
      return {
        isFetching: false,
        messages: action.response,
        errorMessage: ''
      }
    case MESSAGE_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        messages: []
      }

    default:
      return state
  }
}