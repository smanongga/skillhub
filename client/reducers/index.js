import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'
import location from './locations'
import categories from './categories'
import categoryUsersLearn from './categoryUsersLearn'
import categoryUsersOffer from './categoryUsersOffer'

const reducers = combineReducers({
  auth,
  profile,
  categories,
  categoryUsersLearn,
  categoryUsersOffer,
  messages,
  location
})

export default reducers
