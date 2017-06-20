import {GET_LOCATION} from '../actions'

const locations = (state = [], action) => {
  switch (action.type) {
    case GET_LOCATION:
      return action.location
    default:
      return state
  }
}

export default locations
