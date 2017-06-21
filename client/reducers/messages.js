import {
  MESSAGE_SUCCESS,
  SEND_SUCCESS,
  SEND_FAILURE,
  SENT_SUCCESS,
} from '../actions/messages'

const initialState = []

export default function messages (state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return  action.response
    case SENT_SUCCESS:
      return action.response

    default:
      return state
  }
}
