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
        messages: action.response,
        errorMessage: ''
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
        errorMessage: ''
      }
    case SEND_SUCCESS:
      return {
        isFetching: false,
        messageData: action.response,
        errorMessage: ''
      }
    case SEND_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        messageData: []
      }
    case SENT_REQUEST:
      return {
        isFetching: true,
        errorMessage: '',
        sentMessages: []
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
        sentMessages: []
      }
    case READ_REQUEST:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      }
    case READ_SUCCESS:
      return {
        isFetching: false,
        readId: action.response,
        errorMessage: ''
      }
    case READ_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        readId: []
      }

    default:
      return state
  }
}