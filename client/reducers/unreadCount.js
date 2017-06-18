import {
    PUSHED_UNREAD_COUNT
} from '../actions'

const initialState = {
  errorMessage: '',
  unreadCount: []
}

export default function unreadCount (state = initialState, action) {
  switch (action.type) {
    case PUSHED_UNREAD_COUNT:
      return {
        errorMessage: '',
        unreadCount: action.unreadCount
      }
    default:
      return state
  }
}    
    