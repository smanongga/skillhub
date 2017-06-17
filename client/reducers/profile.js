import { UPDATE_PROFILE, USERS_PROFILE } from '../actions/index'

const profile = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return [
        action.updatedProfile
      ]
    case 'GET_PROFILE':
      return [
        action.data
      ]
    case USERS_PROFILE:
      return [
        action.data
      ]
    default:
      return state
  }
}

export default profile
