import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_FAILURE,
  SEND_REQUEST,
  SEND_SUCCESS,
  SEND_FAILURE,
  SENT_REQUEST,
  SENT_SUCCESS,
  SENT_FAILURE,
  READ_REQUEST,
  READ_SUCCESS,
  READ_FAILURE
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
        errorMessage: '',
        messages: action.response,
      }
    case MESSAGE_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        messages: []
      }
    case SEND_REQUEST:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
      }
    case SEND_SUCCESS:
      return {
        isFetching: false,
        errorMessage: '',
        messages: []
      }
    case SEND_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        messages:[]
      }
    case SENT_REQUEST:
      return {
        isFetching: true,
        errorMessage: '',
        messages: []
      }
    case SENT_SUCCESS:
      return {
        isFetching: false,
        messages: action.response,
        errorMessage: ''
      }
    case SENT_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        messagesMessages: []
      }

    default:
      return state
  }
}
