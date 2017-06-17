import {RECEIVE_CATEGORY_USERS_LEARN} from '../actions'

const categoryUsersLearn = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_USERS_LEARN:
      return action.categoryUsersLearn

    default:
      return state
  }
}

export default categoryUsersLearn
