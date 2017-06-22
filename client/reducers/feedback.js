import {
  FEEDBACK_SUCCESS
} from '../actions/feedback'

const initialState = []

export default function feedback (state = initialState, action) {
  switch (action.type) {
    case FEEDBACK_SUCCESS:
      return action.response
    default:
      return state
  }
}
