import {combineReducers} from 'redux'

import auth from './auth'
import messages from './messages'
import profile from './profile'
import viewProfile from './viewProfile'
import location from './locations'
import skills from './skills'
import senderId from './senderId'
import categories from './categories'
import categoryUsersLearn from './categoryUsersLearn'
import categoryUsersOffer from './categoryUsersOffer'
import waiting from './waiting'
import feedback from './feedback'

const reducers = combineReducers({
  auth,
  messages,
  profile,
  viewProfile,
  location,
  skills,
  senderId,
  categories,
  categoryUsersLearn,
  categoryUsersOffer,
  waiting,
  feedback
})

export default reducers
