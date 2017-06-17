import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'
import categories from './categories'
import categoryUsers from './categoryUsers'

const reducers = combineReducers({
  auth,
  profile,
  categories,
  categoryUsers,
  messages
})

export default reducers
