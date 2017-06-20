import { UPDATE_PROFILE, USERS_PROFILE, UPDATE_SKILLS } from '../actions/index'
const initialState = {
  learn: [],
  teach: []
}
const profile = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.updatedProfile
      }
    case USERS_PROFILE:
      return {
        ...state,
        ...action.data
      }
    case UPDATE_SKILLS:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default profile
