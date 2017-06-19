import {
  FEEDBACK_REQUEST,
  FEEDBACK_SUCCESS,
  FEEDBACK_FAILURE
} from '../actions'

const initialState = {
  isFetching: false,
  errorMessage: '',
  feedback: []
}

export default function feedback (state = initialState, action) {
  switch (action.type) {
    case FEEDBACK_REQUEST:
      return {
        isFetching: true,
        errorMessage: '',
        feedback: []
      }
    case FEEDBACK_SUCCESS:
      return {
        isFetching: false,
        feedback: action.response,
        errorMessage: ''
      }
    case FEEDBACK_FAILURE:
      return {
        isFetching: false,
        errorMessage: action.message,
        feedback: []
      }
    default:
      return state
  }
}
