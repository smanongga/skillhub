import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'
import categories from './categories'

const reducers = combineReducers({
  auth,
  profile,
  categories,
  messages
})

export default reducers
