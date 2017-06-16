import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_FAILURE
} from '../actions/messages'

const initialState = {
  isFetching: false,
  errorMessage: '',
  message: ''
}

export default function message (state = initialState, action) {
  switch (action.type) {
    case MESSAGE_REQUEST:
      return {
        isFetching: true,
        errorMessage: '',
        message: ''
      }
    case MESSAGE_SUCCESS:
      return {
        isFetching: false,
        message: action.response,
        errorMessage: ''
      }
    case MESSAGE_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        message: ''
      }

    default:
      return state
  }
}