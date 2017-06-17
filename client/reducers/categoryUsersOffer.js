import {RECEIVE_CATEGORY_USERS_OFFER} from '../actions'

const categoryUsersOffer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_USERS_OFFER:
      return action.categoryUsersOffer

    default:
      return state
  }
}

export default categoryUsersOffer
