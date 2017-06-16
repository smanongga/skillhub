import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'

const reducers = combineReducers({
  auth, 
  messages
})

export default reducers
