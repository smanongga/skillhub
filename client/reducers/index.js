import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'
import viewProfile from './viewProfile'
import location from './locations'
import senderId from './senderId'
import unreadCount from './unreadCount'
import categories from './categories'
import categoryUsersLearn from './categoryUsersLearn'
import categoryUsersOffer from './categoryUsersOffer'

const reducers = combineReducers({
  auth,
  profile,
  viewProfile,
  categories,
  categoryUsersLearn,
  categoryUsersOffer,
  messages,
  location,
  senderId,
  unreadCount
})

export default reducers
