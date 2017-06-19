import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'
import viewProfile from './viewProfile'
import location from './locations'
import skills from './skills'
import senderId from './senderId'
import categories from './categories'
import waiting from './waiting'
import categoryUsersLearn from './categoryUsersLearn'
import categoryUsersOffer from './categoryUsersOffer'
import feedback from './feedback'

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
  skills,
  waiting,
  feedback
})

export default reducers
