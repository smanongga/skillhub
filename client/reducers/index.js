import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'
import categories from './categories'
import categoryUsersLearn from './categoryUsersLearn'
import categoryUsersOffer from './categoryUsersOffer'

const reducers = combineReducers({
  auth,
  profile,
  categories,
  categoryUsersLearn,
  categoryUsersOffer,
  messages
})

export default reducers
