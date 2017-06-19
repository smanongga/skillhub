import { UPDATE_PROFILE, USERS_PROFILE, PUSHED_SENDER_ID, UPDATE_SKILLS } from '../actions/index'
const initialState = {
  learn: [],
  teach: []
}
const profile = (state = initialState, action) => {
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
      return action.data

    case UPDATE_SKILLS:
      return [
        action.data
      ]
    default:
      return state
  }
}

export default profile
