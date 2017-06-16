import {combineReducers} from 'redux'

import auth from './auth'
import profile from './profile'
import categories from './categories'

const reducers = combineReducers({
  auth,
  profile,
  categories
})

export default reducers
