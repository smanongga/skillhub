const initialState = {
  learn: [],
  teach: []
}
const viewProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return action.data
    default:
      return state
  }
}

export default viewProfile
