import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'

const reducers = combineReducers({
  auth, 
  messages,
  profile
})

export default reducers
