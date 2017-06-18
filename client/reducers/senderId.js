import {
    PUSHED_SENDER_ID
} from '../actions'

const initialState = {
  errorMessage: '',
  senderId: []
}

export default function senderId (state = initialState, action) {
  switch (action.type) {
    case PUSHED_SENDER_ID:
      return {
        errorMessage: '',
        senderId: action.senderId
      }
    default:
      return state
  }
}    
    
    
    
    
    
    
    
    
    
    
    
    
