import {RECEIVE_CATEGORY_USERS} from '../actions'

const categoryUsers = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_USERS:
      return action.categoryUsers

    default:
      return state
  }
}

export default categoryUsers
