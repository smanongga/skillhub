import { UPDATE_PROFILE } from '../actions/index'

const profile = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return [
        ...state,
        action.updatedProfile
      ]
      default:
     return state
  }

}

export default profile
