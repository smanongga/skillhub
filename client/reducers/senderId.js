import {PUSHED_SENDER_ID} from '../actions'

const initialState = []

export default function senderId (state = initialState, action) {
  switch (action.type) {
    case PUSHED_SENDER_ID:
      return action.senderId
    default:
      return initialState
  }
}
